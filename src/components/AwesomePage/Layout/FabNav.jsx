import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Fab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuContent from './MenuContent'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  fab: {
    position: 'fixed',
    top: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 100
  },
}));

export default function FabNav(props) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer({ ...openDrawer, [anchor]: open });
  };

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Fab className={classes.fab} color="primary"  onClick={toggleDrawer(anchor, true)}>
        <MenuIcon />
      </Fab>
          <SwipeableDrawer
            anchor={anchor}
            open={openDrawer[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <MenuContent />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <main>
        {props.children}
      </main>
    </div>
  );
}


