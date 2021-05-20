import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getUserFeeds } from '../services/feeds';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import Welcome from './Welcome';
import Feed from './Feed';
import FeedList from './FeedList';
import ReadLater from './ReadLater';
import ScrollTop from './ScrollTop';
import AccountMenu from './AccountMenu';
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useThemeSwitcher } from "mui-theme-switcher";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const drawerWidth = 300;
const itemPerPage = 40;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
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
    height: '100vh',
    overflow: 'auto',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '2px',
    }
  },
  drawerPaperClose: {
    height: '100vh',
    overflow: 'auto',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '2px',
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '2px',
    }
  },
  container: {
    padding: 0,
    maxWidth: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
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
  const [title, setTitle] = useState('Paperboy');
  const [userFeeds, setUserFeeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const contentRef = React.useRef();

  const handleDrawerOpen = () => {
    if (open) setOpen(false);
    if (!open) setOpen(true);
  };

  const search = e => {
    setSearchQuery(e.target.value);
  }

  const updateUserFeeds = () => {
    getUserFeeds()
      .then(fetchedFeeds => {
        setUserFeeds(fetchedFeeds);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    updateUserFeeds()
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
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
              value={searchQuery}
              onChange={search}
            />
          </div>
          <Tooltip title="Toggle dark mode">
            <IconButton onClick={toggleDark} color="inherit">
              {dark ? <WbSunnyIcon /> : <Brightness3Icon />}
            </IconButton>
          </Tooltip>
          <AccountMenu {...props} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <Toolbar />
        <FeedList userFeeds={userFeeds} setUserFeeds={setUserFeeds} updateUserFeeds={updateUserFeeds} />
        <Divider />
      </Drawer>
      <main id="content" className={classes.content}  ref={contentRef}>
        <Toolbar id="back-to-top-anchor"/>
        <Container className={classes.container}>

          <Switch>
            <Route
              exact path={'/all'}
              render={props => {
                return <ReadLater setTitle={setTitle} id={'all'} title={'All feeds'} searchQuery={searchQuery} itemPerPage={itemPerPage} {...props} />
              }}
            />
            <Route
              exact path={'/read-later'}
              render={props => {
                return <ReadLater setTitle={setTitle} id={'starred'} title={'Read later'} searchQuery={searchQuery} itemPerPage={itemPerPage} {...props} />
              }}
            />
            <Route
              exact path={'/:id'}
              render={props => {
                return <Feed setTitle={setTitle} setUserFeeds={setUserFeeds} searchQuery={searchQuery} itemPerPage={itemPerPage} {...props} />
              }}
            />
            <Route
              exact path={'/'}
              render={props => {
                return <Welcome setTitle={setTitle} userFeeds={userFeeds} user={props.user} {...props} />
              }}
            />
          </Switch>

          <ScrollTop contentRef={contentRef} {...props}>
            <Fab color="primary" size="small">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>

        </Container>
      </main>
    </div>
  );
}