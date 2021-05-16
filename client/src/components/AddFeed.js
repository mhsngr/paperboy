import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { addFeed, getAllFeeds, getIcon } from '../services/feeds';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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
  const [feeds, setFeeds] = useState(null);
  const [filteredFeeds, setFilteredFeeds] = useState(null);
  const [feedUrl, setFeedUrl] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
    setFeedUrl('');
    getAllFeeds()
      .then(allFeeds => {
        setFeeds(allFeeds);
        setFilteredFeeds(allFeeds);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleClose = () => {
    props.setFeeds(null);
    setOpen(false);
    addFeed(feedUrl)
      .then(() => {
        props.updateFeeds();
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
          aria-label="add new feed"
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
          <ListItemIcon>
            <Avatar variant="rounded">
              <AddIcon/>
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Add new feed" />
        </ListItem>
      </Tooltip>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            {/* <Typography variant="h6" className={classes.title}>
              Add new Feed
            </Typography> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search or enter URL"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={feedUrl}
                onChange={search}
                fullWidth
              />
            </div>
            <IconButton autoFocus color="inherit" onClick={handleClose}>
              <AddIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
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
      </Dialog>
    </div>
  );
}
