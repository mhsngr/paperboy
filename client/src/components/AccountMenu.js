import React from 'react';
import { signout } from '../services/auth';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function OptionsMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    signout()
      .then(() => {
        props.setUser(null);
        props.history.push('/signin');
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          edge="end"
          onClick={handleMenuOpen}
          color="inherit"
        >
          <Avatar src={props.user.picture} alt={props.user.username} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        id='account-menu'
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
      </Menu>
    </>
  );
}