import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

import {
  List,
  ListItem,
  Toolbar,
  IconButton,
  Hidden,
  AppBar,
  Drawer,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import logo from '../../assets/Logo.svg';

import useStyles from './styles';

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About us`, path: `/about-us` },
];

const NavBar = props => {
  const { window } = props;

  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerList = (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map(({ title, path }, index) => (
          <ListItem component={Link} exact button to={path} key={title}>
            <ListItemIcon className={classes.icon}>
              {index % 2 === 0 ? <HomeIcon /> : <SupervisorAccountIcon />}
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="static"
        color={'transparent'}
        className={classes.appBar}
        style={{ boxShadow: 'none' }}
        id="back-to-top-anchor"
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.logoLink}>
            <img src={logo} alt="" className={classes.logo} />
          </Link>

          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navList}
          >
            <Hidden smUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              {navLinks.map(({ title, path }) => (
                <ListItem
                  component={Link}
                  exact
                  to={path}
                  key={title}
                  className={classes.navLinks}
                  activeClassName={classes.active}
                >
                  <Typography variant="button">{title}</Typography>
                </ListItem>
              ))}
            </Hidden>
          </List>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default NavBar;
