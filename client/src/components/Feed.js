import React, { useState, useEffect } from 'react';
import { getFeed, getStarred, starItem, unstarItem  } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
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
  const [filteredItems, setFilteredItems] = useState(null);
  const [starredItems, setStarredItems] = useState(null);

  const handleStarItem = (id) => {
    starItem(id)
      .then(items => {
        setStarredItems(items);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleUnstarItem = (id) => {
    unstarItem(id)
      .then(items => {
        setStarredItems(items);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    setFeed(null);
    setFilteredItems(null);
    getStarred()
      .then(items => {
        setStarredItems(items);
        getFeed(props.match.params.id)
          .then(fetchedFeed => {
            setFeed(fetchedFeed);
            setFilteredItems(fetchedFeed.feedItems);
            props.setTitle(fetchedFeed.title)
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }, [props.match.params.id])

  useEffect(() => {
    if (!feed) return;
    const filtered = props.searchQuery ? feed.feedItems.filter(item => item.title.toLowerCase().includes(props.searchQuery.toLowerCase())) : feed.feedItems;
    setFilteredItems(filtered);
  }, [props.searchQuery])
  
  if (!filteredItems) return <LinearProgress />
  // props.setTitle(feed.title)
  return (
    <div className={classes.root}>
      {filteredItems.map(item => {
        return (
          <FeedItem key={item._id} item={item} handleStarItem={handleStarItem} handleUnstarItem={handleUnstarItem} starred={starredItems.includes(item._id)} />
        )
      })}
    </div>
  );
}