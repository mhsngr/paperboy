import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAge } from '../services/feeds';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CloseIcon from '@material-ui/icons/Close';
import Link from '@material-ui/core/Link';
import DOMPurify from 'dompurify';
import DoneIcon from '@material-ui/icons/Done';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Highlighter from "react-highlight-words";

const useStyles = makeStyles((theme) => ({
  feedItem: {
    padding: theme.spacing(0,9,3,9),
  },
  feedItemHeading: {
    paddingBottom: theme.spacing(1),
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  itemInfo: {
    display: 'flex',
  },
  itemFeed: {
    whiteSpace: 'nowrap',
    textAlign: 'right',
  },
  itemAge: {
    textAlign: 'right',
    width: theme.spacing(6),
  },
  toolbar: {
    paddingBottom: theme.spacing(2),
  },
  highlight: {
    color: 'inherit',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function FeedItem(props) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <ListItem dense onClick={handleClick}>
          <ListItemText />
          {props.unread ?
            <Tooltip title="Mark read">
              <IconButton size="small" onClick={() => props.handleMarkRead(props.item._id)}>
                <DoneIcon />
              </IconButton>
            </Tooltip>
            :
            <Tooltip title="Close">
              <IconButton size="small">
                <CloseIcon />
              </IconButton>
            </Tooltip>
          }
        </ListItem>
      ) : (
        <ListItem button dense>
          <ListItemIcon>
            <Tooltip title="Read later">
            {props.starred ?
            (
              <IconButton
                size="small"
                onClick={() => props.handleUnstarItem(props.item._id)}
              >
                <TurnedInIcon fontSize="small" color={props.unread ? 'inherit' : 'disabled' }/>
              </IconButton>
            ) :
            (
              <IconButton 
                size="small"
                onClick={() => props.handleStarItem(props.item._id)}
              >
                <TurnedInNotIcon fontSize="small" color={props.unread ? 'inherit' : 'disabled' }/>
              </IconButton>
            )}
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            onClick={handleClick}
            primary={
              <>
              <div className={classes.itemHeader}>
                <Typography  className={classes.itemTitle} color={props.unread ? 'textPrimary' : 'textSecondary' }>
                  <Highlighter
                    highlightClassName={classes.highlight}
                    searchWords={[props.searchQuery]}
                    autoEscape={true}
                    textToHighlight={props.item.title}
                  />
                </Typography>
                <div className={classes.itemInfo}>
                  <div className={classes.itemFeed}>
                    <Typography variant="caption" color={props.unread ? 'textPrimary' : 'textSecondary' }>{props.item.feed.title}</Typography>
                  </div>
                  <div className={classes.itemAge}>
                    <Typography variant="caption" color={props.unread ? 'textPrimary' : 'textSecondary' }>{getAge(props.item.isoDate)}</Typography>
                  </div>
                </div>
              </div>
              </>
            }
          />
        </ListItem>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Container component="div" className={classes.feedItem}>
          <Typography variant="h5" color={props.unread ? 'textPrimary' : 'textSecondary' } className={classes.feedItemHeading}>
            {props.unread ?
              <Link
                href={props.item.link}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                underline="none"
                onClick={() => props.handleMarkRead(props.item._id)}
              >
                <Highlighter
                  highlightClassName={classes.highlight}
                  searchWords={[props.searchQuery]}
                  autoEscape={true}
                  textToHighlight={props.item.title}
                />
              </Link>
              :
              <Link
                href={props.item.link}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                underline="none"
              >
                <Highlighter
                  highlightClassName={classes.highlight}
                  searchWords={[props.searchQuery]}
                  autoEscape={true}
                  textToHighlight={props.item.title}
                />
              </Link>
            }
          </Typography>
          {props.item.author || props.item.creator ? 
          (
            <Typography variant="subtitle2" paragraph>{props.item.feed.title} by {props.item.author || props.item.creator}, {new Date(props.item.isoDate).toLocaleString()} {props.unread ?  '' : <Link href='#' color='textSecondary' onClick={() => props.handleUnmarkRead(props.item._id)}>mark unread</Link> }</Typography>
          ) : <Typography variant="subtitle2" paragraph>{props.item.feed.title}, {new Date(props.item.isoDate).toLocaleString()} {props.unread ?  '' : <Link href='#' color='textSecondary' onClick={() => props.handleUnmarkRead(props.item._id)}>mark unread</Link> }</Typography>}
          {props.item.categories.length > 0 ? 
          (
            <Typography variant="subtitle2" paragraph>Category: {props.item.categories.join(', ')}</Typography>
          ) : <></>}
          <ButtonGroup className={classes.toolbar}>
            <Tooltip title="Read later">
              {props.starred ?
              (
                <Button
                  aria-label="read later"
                  onClick={() => props.handleUnstarItem(props.item._id)}
                >
                  <TurnedInIcon />
                </Button>
              ) :
              (
                <Button 
                  aria-label="read later"
                  onClick={() => props.handleStarItem(props.item._id)}
                >
                  <TurnedInNotIcon />
                </Button>
              )}
            </Tooltip>
            <Button><MoreHorizIcon /></Button>
          </ButtonGroup>
          {props.item['content:encoded'] || props.item.content ? 
          (
            <Typography variant="body1" paragraph dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.item['content:encoded'] || props.item.content)}} />
          ) : <></>}
          {props.unread ?
            <Button
              href={props.item.link}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              fullWidth
              onClick={() => props.handleMarkRead(props.item._id)}
            >
              Visit Website
            </Button>
            :
            <Button
              href={props.item.link}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              fullWidth
            >
              Visit Website
            </Button>
          }
        </Container>
      </Collapse>
      <Divider />
    </>
  );
}