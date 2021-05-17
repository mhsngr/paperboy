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


const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%',
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper,
  // },
  feedItem: {
    paddingLeft: theme.spacing(4),
  },
  feedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
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
            <div className={classes.feedHeader}>
            <span>{props.item.title}</span>
            <span>{getAge(props.item.isoDate)}</span>
            </div>
          }
        />
       </ListItem>
       <Collapse in={open} timeout="auto" unmountOnExit>
         <Container component="div" className={classes.feedItem}>
           <Typography>
             {props.item.content}
           </Typography>
         </Container>
      </Collapse>
      <Divider />
    </>
  );
}