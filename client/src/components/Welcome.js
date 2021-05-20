import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  welcome: {
    paddingTop: theme.spacing(2),
    maxWidth: '100%',
  },
  heading: {
    paddingBottom: theme.spacing(1),
  },
  addNew: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },

}));

export default function Feed(props) {
  
  const classes = useStyles();
  
  useEffect(() => {
    props.setTitle('Paperboy');
  }, [])

  return (
    <div className={classes.root}>
      <Container component="div" className={classes.welcome}>
        <Typography variant="h3" className={classes.heading}>
          Welcome to Paperboy
        </Typography>
        {props.userFeeds.length ?
          <></>
          :
          <>
          <Typography variant="h4">
            You follow no feeds yet
          </Typography>
          <Typography variant="h4" className={classes.addNew}>
            <ArrowBackIcon /> Click to add new feed
          </Typography>
          </>
        }
      </Container>
    </div>
  );
}