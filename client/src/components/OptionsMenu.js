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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function OptionsMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleUnfollow = () => {
    unfollowFeed(props.feed._id)
      .then(updatedFeeds => {
        handleDialogClose();
        props.setUserFeeds(updatedFeeds);
        props.setTitle('Paperboy');
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
        <MenuItem dense onClick={handleDialogOpen}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            Unfollow
          </ListItemText>
        </MenuItem>
      </Menu>
      <Dialog
        open={open}
        onClose={handleDialogClose}
      >
        <DialogTitle>Unfollow feed</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to unfollow this feed?<br/>
            {props.feed.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            Dismiss
          </Button>
          <Button onClick={handleUnfollow} color="secondary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}