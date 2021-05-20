import React, { useState, useEffect } from 'react';
import { getFeed, getFeedItems, getStarred, starItem, unstarItem, markRead, unmarkRead, markFeedRead, getUnread } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReadLaterItem from './ReadLaterItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InfiniteScroll from 'react-infinite-scroll-component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  feedDetails: {
    paddingTop: theme.spacing(2),
    maxWidth: '100%',
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

export default function ReadLater(props) {
  
  const classes = useStyles();

  const [feed, setFeed] = useState(null);
  const [starredItems, setStarredItems] = useState(null);
  const [unreadItems, setUnreadItems] = useState(null);
  const [loadedItems, setLoadedItems] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = () => {
    getFeedItems(props.id, props.searchQuery, loadedItems.length, props.itemPerPage)
      .then(newLoadedItems => {
        if (newLoadedItems.length === 0) setHasMore(false);
        else setLoadedItems(loadedItems.concat(newLoadedItems));
      })
      .catch(err => {
        console.log(err);
      })
  }

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
          getUnread(props.id)
            .then(fetchedUnreadItems => {
              setUnreadItems(fetchedUnreadItems);
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

  const handleMarkFeedRead = () => {
    markFeedRead(props.id)
      .then(response => {
        setUnreadItems(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleUnmarkRead = (id) => {
    unmarkRead(id)
      .then(() => {
        getUnread(props.id)
          .then(fetchedUnreadItems => {
            setUnreadItems(fetchedUnreadItems);
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
    props.setTitle(props.title)
    setLoadedItems(null);
    setHasMore(true);
    getFeed(props.id, props.searchQuery)
      .then(fetchedFeed => {
        setFeed(fetchedFeed);
        getUnread(props.id)
          .then(fetchedUnreadItems => {
            setUnreadItems(fetchedUnreadItems);
            getStarred()
              .then(fetchedStarredItems => {
                setStarredItems(fetchedStarredItems);
                getFeedItems(props.id, props.searchQuery, 0, props.itemPerPage)
                  .then(feedItems => {
                    setLoadedItems(feedItems);
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
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    handleRefresh();
  }, [props.title, props.searchQuery])

  if (!loadedItems) return <LinearProgress />
  if (loadedItems.length === 0) return <></>

  return (
    <div className={classes.root}>
      <Container component="div" className={classes.feedDetails}>
        <div className={classes.feedHeader}>
          <Typography variant="h4">
            {props.title}
          </Typography>
          <div className={classes.feedToolbar}>
            {(unreadItems.length) === 0 ?
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
                  badgeContent={unreadItems.length}
                  color="primary"
                  overlap="circle"
                  max={999}
                >
                  <IconButton onClick={() => handleMarkFeedRead()}>
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
            <Typography variant="subtitle2" paragraph>Category: {feed.category.join(', ')}, {feed.feedItems} articles</Typography>
          ) : <Typography variant="subtitle2" paragraph>{feed.feedItems} articles</Typography>}
      </Container>
      <Divider />
      <List className={classes.feedList}>
        <InfiniteScroll
          dataLength={loadedItems.length}
          next={loadMoreItems}
          hasMore={hasMore}
          loader={<LinearProgress />}
          scrollableTarget="content"
        >
          {loadedItems.map(item => {
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
                unread={unreadItems.includes(item._id)}
                {...props}
              />
            )
          })}
        </InfiniteScroll>
      </List>
    </div>
  );
}