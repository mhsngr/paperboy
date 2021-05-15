import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function FeedList(props) {
  const classes = useStyles();

  const getIcon = link => {
    const url = new URL(link);
    return `https://logo.clearbit.com/${url.hostname}`
  }

  return (
    <div>
      {props.feeds.map(feed => {
        return (
          <Tooltip title={feed.title} key={feed._id} placement="right">
            <ListItem button component={NavLink} to={`/${feed._id}`} activeClassName="Mui-selected">
              <ListItemIcon>
                <Avatar variant="rounded" src={getIcon(feed.link)} alt={feed.title} />
              </ListItemIcon>
              <ListItemText primary={feed.title} />
            </ListItem>
          </Tooltip>
        )
      })}
    </div>
  )
}