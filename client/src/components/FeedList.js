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

// const useStyles = makeStyles((theme) => ({
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
// }));

export default function FeedList() {
  // const classes = useStyles();
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
      {feeds.map(feed => {
        return (
          <Tooltip title={feed.title} key={feed._id} placement="right">
            <ListItem button component={NavLink} to={`/${feed._id}`} activeClassName="Mui-selected">
              <ListItemIcon>
                <Avatar variant="rounded" src={getIcon(feed.link)} alt={feed.title} />
              </ListItemIcon>
              <ListItemText primary={feed.title} />
            </ListItem>
          </Tooltip>
        )
      })}
      <AddFeed updateFeeds={updateFeeds} setFeeds={setFeeds}/>
    </List>
  )
}