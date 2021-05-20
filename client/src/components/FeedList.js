import React from 'react';
import { NavLink } from 'react-router-dom';
import { getIcon } from '../services/feeds';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import AddFeed from './AddFeed';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  feedTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

export default function FeedList(props) {

  const classes = useStyles();

  // const [feeds, setFeeds] = useState([]);

  // const updateUserFeeds = () => {
  //   getUserFeeds()
  //     .then(fetchedFeeds => {
  //       props.setUserFeeds(fetchedFeeds);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  // useEffect(() => {
  //   updateUserFeeds()
  // }, [])

  if (!props.userFeeds) return <LinearProgress />

  return (
    <List>
      <Tooltip title="All feeds" placement="right">
        <ListItem button component={NavLink} to={`/all`} activeClassName="Mui-selected">
          <ListItemIcon className={classes.menuButton}>
            <IconButton
              edge="start"
              color="inherit"
            >
              <LibraryBooksIcon/>
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="All feeds" />
        </ListItem>
      </Tooltip>
      <Tooltip title="Read later" placement="right">
        <ListItem button component={NavLink} to={`/read-later`} activeClassName="Mui-selected">
          <ListItemIcon className={classes.menuButton}>
            <IconButton
              edge="start"
              color="inherit"
            >
              <BookmarksIcon/>
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Read later" />
        </ListItem>
      </Tooltip>
      {props.userFeeds.map(feed => {
        return (
          <Tooltip title={feed.title} key={feed._id} placement="right">
            <ListItem button component={NavLink} to={`/${feed._id}`} activeClassName="Mui-selected">
              <ListItemAvatar>
                <Avatar variant="rounded" src={getIcon(feed.link)} alt={feed.title} />
              </ListItemAvatar>
              <ListItemText primary={feed.title} className={classes.feedTitle}/>
            </ListItem>
          </Tooltip>
        )
      })}
      <AddFeed updateUserFeeds={() => props.updateUserFeeds()} setUserFeeds={props.setUserFeeds} />
    </List>
  )
}