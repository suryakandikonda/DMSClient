import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LabelIcon from '@material-ui/icons/Label';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AddIcon from '@material-ui/icons/Add';
import EmailIcon from '@material-ui/icons/Email';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="HeaderList">
        <NavLink to='/main/inventory'>
            <ListItem button key='inventory'>
                <ListItemIcon><LabelIcon></LabelIcon></ListItemIcon>
                <ListItemText primary='Inventory' />
            </ListItem>
        </NavLink>
       
        <NavLink to='/main/orders'>
            <ListItem button key='orders'>
                <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
                <ListItemText primary='Orders' />
            </ListItem>
        </NavLink>
        
        <NavLink to='/main/track'>
            <ListItem button key='track'>
                <ListItemIcon><TrackChangesIcon /></ListItemIcon>
                <ListItemText primary='Track Orders' />
            </ListItem>
        </NavLink>
        
        <NavLink to='/main/additems'>
            <ListItem button key='add'>
                <ListItemIcon><AddIcon /></ListItemIcon>
                <ListItemText primary='Add Items' />
            </ListItem>
        </NavLink>
        
        <NavLink to='/main/complaints'>
            <ListItem button key='messages'>
                <ListItemIcon><EmailIcon /></ListItemIcon>
                <ListItemText primary='Messages' />
            </ListItem>
        </NavLink>
        
        <NavLink to='/main/payments'>
            <ListItem button key='payments'>
                <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                <ListItemText primary='Payments' />
            </ListItem>
        </NavLink>
        
        <NavLink to='/main/stats'>
            <ListItem button key='stats'>
                <ListItemIcon><EqualizerIcon /></ListItemIcon>
                <ListItemText primary='Stats' />
            </ListItem>
        </NavLink>
        
      </List>
      <Divider />
      <List>
            <NavLink to='/main/editprofile'>
                <ListItem button key='edit'>
                    <ListItemIcon><EditIcon /></ListItemIcon>
                    <ListItemText primary='Edit Profile' />
                </ListItem>
            </NavLink>
            
            <NavLink to='/main/logout'>
                <ListItem button key='logout'>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary='Logout' />
                </ListItem>
            </NavLink>
            
      </List>
    </div>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
        <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon onClick={toggleDrawer('left', true)}/>
          </IconButton>
          
          <Typography variant="h6" noWrap>
            Distribution Management System
          </Typography>
          
        </Toolbar>
        </AppBar>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
