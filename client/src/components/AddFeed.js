import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { addFeed, getAllFeeds, getIcon } from '../services/feeds';
import Dialog from '@material-ui/core/Dialog';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Popover from '@material-ui/core/Popover';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddFeed(props) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feeds, setFeeds] = useState(null);
  const [filteredFeeds, setFilteredFeeds] = useState(null);
  const [feedUrl, setFeedUrl] = useState('');
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const searchRef = React.useRef();
  let history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
    setLoading(true);
    setFeedUrl('');
    getAllFeeds()
      .then(allFeeds => {
        setLoading(false);
        setFeeds(allFeeds);
        setFilteredFeeds(allFeeds);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setMessage('');
  };

  const handleAddFeed = () => {
    setAnchorEl(searchRef.current);
    setLoading(true);
    addFeed(feedUrl)
      .then(response => {
        setLoading(false);
        if (response.message) {
          setMessage(response.message);
        }
        else {
          setMessage('');
          setAnchorEl(null);
          setOpen(false);
          props.updateUserFeeds();
          history.push(`/${response._id}`);
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  const search = e => {
    setFeedUrl(e.target.value);
    const filtered = e.target.value ? feeds.filter(feed => feed.title.toLowerCase().includes(e.target.value.toLowerCase()) || feed.feedUrl.toLowerCase().includes(e.target.value.toLowerCase())) : feeds;
    setFilteredFeeds(filtered);
  }

  if (!filteredFeeds) return (
    <Tooltip title="Add new feed" placement="right">
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon className={classes.menuButton}>
          <IconButton
            edge="start"
            color="inherit"
          >
            <AddIcon/>
          </IconButton>
        </ListItemIcon>
        <ListItemText primary="Add new feed" />
      </ListItem>
    </Tooltip>
  )

  return (
    <div>
      <Tooltip title="Add new feed" placement="right">
        <ListItem button onClick={handleClickOpen}>
          <ListItemIcon className={classes.menuButton}>
            <IconButton
              edge="start"
              color="inherit"
            >
              <AddIcon/>
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Add new feed" />
        </ListItem>
      </Tooltip>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <div className={classes.search} ref={searchRef}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search or enter URL"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                // inputProps={{ 'aria-label': 'search' }}
                value={feedUrl}
                onChange={search}
                fullWidth
                autofocus
              />
            </div>
            {loading ? 
            <IconButton disabled color="inherit" onClick={handleAddFeed}>
              <AddIcon/>
            </IconButton>
            :
            <IconButton color="inherit" onClick={handleAddFeed}>
              <AddIcon/>
            </IconButton>
            }
            <Popover
              id='error-popover'
              open={!!message}
              anchorEl={anchorEl}
              onClose={() => setMessage('')}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Alert severity="error">{message}</Alert>
            </Popover>
          </Toolbar>
        </AppBar>
        {loading ?
          <LinearProgress />
          :
          <List>
            {filteredFeeds.map(feed => {
              return (
                <ListItem button key={feed._id} onClick={() => setFeedUrl(feed.feedUrl)}>
                  <ListItemIcon>
                    <Avatar variant="rounded" src={getIcon(feed.link)} alt={feed.title} />
                  </ListItemIcon>
                  <ListItemText primary={feed.title} />
                </ListItem>
              )
            })}
          </List>
        }
      </Dialog>
    </div>
  );
}