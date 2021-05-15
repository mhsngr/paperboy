import React, { useState, useEffect } from 'react';
import { getFeed } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import LinearProgress from '@material-ui/core/LinearProgress';
import FeedItem from './FeedItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Feed(props) {
  const classes = useStyles();

  const [feed, setFeed] = useState(null);

  useEffect(() => {
    setFeed(null);
    getFeed(props.match.params.id)
      .then(fetchedFeed => {
        setFeed(fetchedFeed);
      })
      .catch(err => {
        console.log(err);
      })
  }, [props.match.params.id])

  if (!feed) return <LinearProgress />
  return (
    <List component="nav" className={classes.root} aria-label="main mailbox folders">
      {feed.feedItems.map(item => {
        return (
          <FeedItem key={item._id} item={item} />
        )
      })}
    </List>
  );
}