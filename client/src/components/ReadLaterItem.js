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
// import ListSubheader from '@material-ui/core/ListSubheader';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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


const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%',
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper,
  // },
  feedItem: {
    padding: theme.spacing(0,9,3,9),
  },
  feedItemHeading: {
    paddingBottom: theme.spacing(1),
  },
  feedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar: {
    paddingBottom: theme.spacing(2),
  },
  // title: {
  //   "&:hover": {
  //     backgroundColor: theme.palette.action.hover,
  //   }
  // }
}));

export default function FeedItem(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // const renderCategories = categories => {
  //   const text = categories.join(', ')
  //   console.log(text)
  //   // const trimmed = text.slice(0, -1);
  //   // console.log(trimmed)
  //   // return trimmed;
  // }
  return (
    // <Accordion>
    //   <AccordionSummary className={classes.title}>
    //     <Typography className={classes.heading}>{props.item.title}</Typography>
    //   </AccordionSummary>
    //   <AccordionDetails>
    //     {props.starred ?
    //       (
    //         <IconButton onClick={() => props.handleUnstarItem(props.item._id)}>
    //           <TurnedInIcon/>
    //         </IconButton>
    //       ) :
    //       (
    //         <IconButton onClick={() => props.handleStarItem(props.item._id)}>
    //           <TurnedInNotIcon/>
    //         </IconButton>
    //       )}
    //     <Typography>
    //       {props.item.content}
    //     </Typography>
    //   </AccordionDetails>
    // </Accordion>
    <>
        {open ? (
          <ListItem dense onClick={handleClick}>
            <ListItemText />
            {props.read ?
              <IconButton size="small">
                <CloseIcon />
              </IconButton>
              :
              <IconButton size="small" onClick={() => props.handleMarkRead(props.item._id)}>
                <DoneIcon />
              </IconButton>
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
                  aria-label="read later"
                  onClick={() => props.handleUnstarItem(props.item._id)}
                >
                  <TurnedInIcon fontSize="small" />
                </IconButton>
              ) :
              (
                <IconButton 
                  size="small"
                  aria-label="read later"
                  onClick={() => props.handleStarItem(props.item._id)}
                >
                  <TurnedInNotIcon fontSize="small"/>
                </IconButton>
              )}
              </Tooltip>
            </ListItemIcon>
            <ListItemText
              onClick={handleClick}
              primary={
                <>
                <div className={classes.feedHeader}>
                <Typography color={props.read ? 'textSecondary' : 'textPrimary' }>{props.item.title}</Typography>
                
                <span><Typography variant="caption" color={props.read ? 'textSecondary' : 'textPrimary' }>{getAge(props.item.isoDate)}</Typography></span>
                </div>
                <Typography variant="caption" color={props.read ? 'textSecondary' : 'textPrimary' }>{props.feedTitle}</Typography>
                </>
              }
            />
          </ListItem>
        )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Container component="div" className={classes.feedItem}>
          <Typography variant="h5" color={props.read ? 'textSecondary' : 'textPrimary' } className={classes.feedItemHeading}>
            {props.read ?
            <Link
              href={props.item.link}
              target="_blank"
              rel="noreferrer"
              color="inherit"
              underline="none"
            >
            {props.item.title}
            </Link>
            :
            <Link
              href={props.item.link}
              target="_blank"
              rel="noreferrer"
              color="inherit"
              underline="none"
              onClick={() => props.handleMarkRead(props.item._id)}
            >
            {props.item.title}
            </Link>
            }
          </Typography>
          {props.item.author || props.item.creator ? 
          (
            <Typography variant="subtitle2" paragraph>{props.feedTitle} by {props.item.author || props.item.creator}, {new Date(props.item.isoDate).toLocaleString()}</Typography>
          ) : <Typography variant="subtitle2" paragraph>{props.feedTitle}, {new Date(props.item.isoDate).toLocaleString()}</Typography>}
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
            <Button>Share</Button>
          </ButtonGroup>
          {props.item['content:encoded'] || props.item.content ? 
          (
            <Typography variant="body1" paragraph dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.item['content:encoded'] || props.item.content)}} />
          ) : <></>}
          {props.read ?
            <Button
              href={props.item.link}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              fullWidth
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
              onClick={() => props.handleMarkRead(props.item._id)}
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