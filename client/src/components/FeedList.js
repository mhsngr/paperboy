import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getUserFeeds, getIcon } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import RssFeedIcon from '@material-ui/icons/RssFeed';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import AddFeed from './AddFeed';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function FeedList() {
  const classes = useStyles();
  const [feeds, setFeeds] = useState([]);

  const updateFeeds = () => {
    setFeeds(null)
    getUserFeeds()
      .then(fetchedFeeds => {
        setFeeds(fetchedFeeds);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    updateFeeds()
  }, [])

  if (!feeds) return <LinearProgress />
  return (
    <List>
      <Tooltip title="Read later" placement="right">
        <ListItem button component={NavLink} to={`/read-later`} activeClassName="Mui-selected">
          <ListItemIcon className={classes.menuButton}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="read later"
            >
              <BookmarksIcon/>
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Read later" />
        </ListItem>
      </Tooltip>
      {feeds.map(feed => {
        return (
          <Tooltip title={feed.title} key={feed._id} placement="right">
            <ListItem button component={NavLink} to={`/${feed._id}`} activeClassName="Mui-selected">
              <ListItemAvatar>
                <Avatar variant="rounded" src={getIcon(feed.link)} alt={feed.title} />
              </ListItemAvatar>
              <ListItemText primary={feed.title} />
            </ListItem>
          </Tooltip>
        )
      })}
      <AddFeed updateFeeds={updateFeeds} setFeeds={setFeeds}/>
    </List>
  )
}