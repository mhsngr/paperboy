import React, { useState, useEffect } from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import { signout } from '../services/auth';
import { getUserFeeds, getFeed } from '../services/feeds';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';
import Feed from './Feed';
import FeedList from './FeedList';
import ReadLater from './ReadLater';
import ScrollTop from './ScrollTop';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { useThemeSwitcher } from "mui-theme-switcher";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import { mainListItems, secondaryListItems } from './listItems';
// import Deposits from './Deposits';
// import Orders from './Orders';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // toolbar: {
  //   paddingRight: 24, // keep right padding when drawer closed
  // },
  // toolbarIcon: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: '0 8px',
  //   ...theme.mixins.toolbar,
  // },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
    padding: 0,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Reader(props) {
  const classes = useStyles();
  const { dark, toggleDark } = useThemeSwitcher();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [userFeeds, setUserFeeds] = useState([]);
  const contentRef = React.useRef();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = () => {
    signout()
      .then(() => {
        props.setUser(null);
        props.history.push('/signin');
      })
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id='account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
    </Menu>
  );
  // const [items, setItems] = useState(null);
  // const [filteredItems, setFilteredItems] = useState(null);

  const [title, setTitle] = useState('Paperboy');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDrawerOpen = () => {
    if (open) setOpen(false);
    if (!open) setOpen(true);
  };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // useEffect(() => {
  //   getUserFeeds()
  //     .then(fetchedFeed => {
  //       setUserFeeds(fetchedFeed);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])

  //  useEffect(() => {
  //   setItems(null);
  //   setFilteredItems(null);
  //   getFeed(props.match.params.id)
  //     .then(fetchedFeed => {
  //       setItems(fetchedFeed.feedItems);
  //       setFilteredItems(fetchedFeed.feedItems);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [props.match.params.id])

  const search = e => {
    setSearchQuery(e.target.value);
    // const filtered = e.target.value ? items.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())) : items;
    // setFilteredItems(filtered);
  }
  // useEffect(() => {
  //   if (!items) return;
  //   console.log(props.searchQuery);
  //   const filtered = props.searchQuery ? items.filter(item => item.title.toLowerCase().includes(props.searchQuery.toLowerCase())) : items;
  //   setFilteredItems(filtered);
  //   console.log(filtered);
  // }, [props.searchQuery])
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}> */}
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={search}
            />
          </div>
          <IconButton onClick={toggleDark} color="inherit">
            {dark ? <WbSunnyIcon /> : <Brightness3Icon />}
          </IconButton>
          <IconButton
              edge="end"
              // size="small"
              aria-label="account of current user"
              aria-controls='account-menu'
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={props.user.picture} alt={props.user.username} />
            </IconButton>
          {/* <IconButton onClick={handleSignout} color="inherit">
              <ExitToAppIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        {/* <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider /> */}
        <Toolbar />
        <FeedList/>
        <Divider />
      </Drawer>
      <main id="content" className={classes.content}  ref={contentRef}>
        <div className={classes.appBarSpacer} id="back-to-top-anchor" />
        <Container maxWidth="lg" className={classes.container}>
          {/* <Grid container spacing={3}> */}
            {/* Chart
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            Recent Deposits
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            Recent Orders */}
            {/* <Grid item xs={12}> */}
            <Switch>
              <Route
                exact path={'/read-later'}
                render={props => {
                  return <ReadLater setTitle={setTitle} searchQuery={searchQuery} {...props} />
                }}
              />
              <Route
                exact path={'/:id'}
                render={props => {
                  return <Feed setTitle={setTitle} searchQuery={searchQuery} {...props} />
                }}
              />
            </Switch>

            <ScrollTop contentRef={contentRef} {...props}>
              <Fab color="primary" size="small">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>

              {/* <Paper className={classes.paper}>
                <Feed id="609d2191006d6273628ae790" />
              </Paper> */}
            {/* </Grid> */}
          {/* </Grid> */}
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}