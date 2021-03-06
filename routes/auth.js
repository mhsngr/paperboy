const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (username === '') {
    return res.status(400).json({ usernameError: 'Your username cannot be empty' });
  }
  User.findOne({ username: username })
  .then(userFromDB => {
    if (userFromDB !== null) {
      return res.status(400).json({ usernameError: 'This username is already taken' });
    }
    if (password.length < 8) {
      return res.status(400).json({ passwordError: 'Your password has to be at least 8 characters long' });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      User.create({ username: username, password: hash })
        .then(createdUser => {
          console.log(createdUser);
          req.login(createdUser, err => {
            if (err) {
              return res.status(500).json({ message: 'Error while logging in' })
            } else {
              return res.status(200).json(createdUser);
            }
          })
        })
        .catch(err => {
          res.json(err);
        })
    }
    })
});

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(400).json({ message: 'Error while logging in' });
    }
    if (!user) {
      return res.status(400).json(info);
    }
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: 'Error while logging in' });
      }
      return res.status(200).json(user);
    })
  })(req, res)
});

router.get('/loggedin', (req, res) => {
  res.json(req.user);
})

router.delete('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Successful Logout' });
})

module.exports = router;