import React, { useState, useEffect } from 'react';
import { getFeed, getStarred, starItem, unstarItem, markRead, unmarkRead, markAllRead, getRead } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import FeedItem from './FeedItem';
import OptionsMenu from './OptionsMenu';
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
import InfiniteScroll from 'react-infinite-scroll-component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // height: `calc(100vh - 64px)`,
    // overflow: 'auto',
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
  const [loadedItems, setLoadedItems] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = () => {
    if (filteredItems.length - loadedItems.length > 20) setLoadedItems(loadedItems.concat(filteredItems.slice(loadedItems.length, loadedItems.length + 20)));
    else {
      setHasMore(false);
      setLoadedItems(filteredItems);
    }
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
          getRead(feed._id)
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
          getRead(feed._id)
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
        getRead(feed._id)
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
    setFeed(null);
    setFilteredItems(null);
    getStarred()
      .then(fetchedStarredItems => {
        setStarredItems(fetchedStarredItems);
        getFeed(props.match.params.id)
          .then(fetchedFeed => {
            getRead(fetchedFeed._id)
              .then(fetchedReadItems => {
                setReadItems(fetchedReadItems);
                setFeed(fetchedFeed);
                setLoadedItems(fetchedFeed.feedItems.slice(0,40));
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
    const filtered = props.searchQuery ? feed.feedItems.filter(item => item.title.toLowerCase().includes(props.searchQuery.toLowerCase())) : feed.feedItems;
    setLoadedItems(filtered.slice(0,40));
    setFilteredItems(filtered);
  }, [props.searchQuery])

  if (!filteredItems) return <LinearProgress />

  return (
    <div id="feed" className={classes.root}>
      <Container component="div" className={classes.feedDetails}>
        <div className={classes.feedHeader}>
          <Typography variant="h4">
            <Link
              href={feed.link}
              target="_blank"
              rel="noreferrer"
              color="inherit"
              underline="none"
            >
              {feed.title}
            </Link>
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
              <OptionsMenu feedId={feed._id} history={props.history} />
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
              <FeedItem
                key={item._id}
                feedTitle={feed.title}
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
        </InfiniteScroll>
      </List>
    </div>
  );
}