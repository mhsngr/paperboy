import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { signup } from '../services/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password === confirm) {
      signup(username, password)
        .then(response => {
          if (response.usernameError) {
            setUsernameError(response.usernameError);
            setPasswordError('');
          } else if (response.passwordError) {
            setUsernameError('');
            setPasswordError(response.passwordError);
          } else {
            props.setUser(response);
            props.history.push('/');
          }
        })
    } else {
      setConfirmError('Passwords do not match')
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                error={!!usernameError}
                helperText={usernameError}
                autoFocus
                // autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                // autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm"
                label="Confirm"
                type="password"
                id="confirm"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                error={!!confirmError}
                helperText={confirmError}
                // autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}