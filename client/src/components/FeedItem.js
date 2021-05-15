import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
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

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%',
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper,
  // },
  feedItem: {
    paddingLeft: theme.spacing(4),
  },
  title: {
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    }
  }
}));

export default function FeedItem(props) {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <Accordion>
      <AccordionSummary className={classes.title}>
        <Typography className={classes.heading}>{props.item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {props.item.content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

{/* <>
<ListItem button onClick={handleClick}>
  <ListItemText primary={props.item.title} />
</ListItem>
<Collapse in={open} timeout="auto" unmountOnExit>
  <Container component="div" className={classes.feedItem}>
    <Typography>
      {props.item.content}
    </Typography>
  </Container>
</Collapse>
<Divider />
</> */}