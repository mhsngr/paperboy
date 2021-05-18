import React, { useState, useEffect } from 'react';
import { getStarred, starItem, unstarItem, markRead, unmarkRead, markAllRead, getReadStarred, getAllRead, getReadLater } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReadLaterItem from './ReadLaterItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  feedDetails: {
    paddingTop: theme.spacing(2),
  },
  feedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  feedToolbar: {
    display: 'flex',
  },
  feedList: {
    padding: 0,
  },
}));

export default function Feed(props) {
  const classes = useStyles();

  const [feed, setFeed] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [starredItems, setStarredItems] = useState(null);
  const [readItems, setReadItems] = useState(null);

  const handleStarItem = (id) => {
    starItem(id)
      .then(items => {
        if (items.message) console.log(items.message);
        else setStarredItems(items);
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

  const handleMarkRead = (id) => {
    markRead(id)
      .then(response => {
        if (response.message) console.log(response.message);
        else {
          getReadStarred()
            .then(fetchedReadItems => {
              setReadItems(fetchedReadItems);
            })
            .catch(err => {
              console.log(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleMarkAllRead = (items) => {
    const ids = items.map(item => item._id);
    markAllRead(ids)
      .then(response => {
        if (response.message) console.log(response.message);
        else {
          getReadStarred()
            .then(fetchedReadItems => {
              setReadItems(fetchedReadItems);
            })
            .catch(err => {
              console.log(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleUnmarkRead = (id) => {
    unmarkRead(id)
      .then(() => {
        getReadStarred()
          .then(fetchedReadItems => {
            setReadItems(fetchedReadItems);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleRefresh = () => {
    props.setTitle('Read later')
    setFeed(null);
    setFilteredItems(null);
    getStarred()
      .then(fetchedStarredItems => {
        setStarredItems(fetchedStarredItems);
        getReadLater()
          .then(items => {
            getReadStarred()
              .then(fetchedReadItems => {
                setReadItems(fetchedReadItems);
                setFeed(items);
                setFilteredItems(items);
              })
              .catch(err => {
                console.log(err);
              })
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    handleRefresh();
  }, [props.match.params.id])

  useEffect(() => {
    if (!feed) return;
    const filtered = props.searchQuery ? feed.filter(item => item.title.toLowerCase().includes(props.searchQuery.toLowerCase())) : feed;
    setFilteredItems(filtered);
  }, [props.searchQuery])

  if (!filteredItems) return <LinearProgress />
  return (
    <div className={classes.root}>
      <Container component="div" className={classes.feedDetails}>
        <div className={classes.feedHeader}>
          <Typography variant="h4">
            Read later
          </Typography>
          <div className={classes.feedToolbar}>
            {(filteredItems.length - readItems.length) === 0 ?
              <Tooltip title="All Read">
                <IconButton>
                  <DoneAllIcon/>
                </IconButton>
              </Tooltip>
              :
              <Tooltip title="Mark as Read">
                <Badge
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  badgeContent={filteredItems.length - readItems.length}
                  color="primary"
                  overlap="circle"
                  max={999}
                >
                  <IconButton onClick={() => handleMarkAllRead(filteredItems)}>
                    <DoneIcon/>
                  </IconButton>
                </Badge>
              </Tooltip>
            }
            <Tooltip title="Refresh">
              <IconButton onClick={() => handleRefresh()}>
                <RefreshIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="More options">
              <IconButton>
                <MoreHorizIcon/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
          {feed.description ? 
          (
            <Typography variant="subtitle1">{feed.description}</Typography>
          ) : <></>}
          {feed.category ? 
          (
            <Typography variant="subtitle2" paragraph>Category: {feed.category.join(', ')}, {feed.feedItems.length} articles</Typography>
          ) : <Typography variant="subtitle2" paragraph>{filteredItems.length} articles</Typography>}
      </Container>
      <Divider />
      <List  className={classes.feedList}>
        {filteredItems.map(item => {
          return (
            <ReadLaterItem
              key={item._id}
              feedTitle={item.feed.title}
              item={item}
              handleStarItem={handleStarItem}
              handleUnstarItem={handleUnstarItem}
              starred={starredItems.includes(item._id)}
              handleMarkRead={handleMarkRead}
              handleUnmarkRead={handleUnmarkRead}
              read={readItems.includes(item._id)}
              {...props}
            />
          )
        })}
      </List>
    </div>
  );
}