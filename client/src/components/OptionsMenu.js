import React from 'react';
import { unfollowFeed } from '../services/feeds';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';

export default function OptionsMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUnfollow = () => {
    unfollowFeed(props.feedId)
      .then(() => {
        handleMenuClose();
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <>
      <Tooltip title="More options">
        <IconButton onClick={handleMenuOpen}>
          <MoreHorizIcon/>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem dense onClick={handleUnfollow}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Unfollow
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}