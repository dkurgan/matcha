import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Menu, MenuItem } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar = (props: object) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
  };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const pushToPage = (location: string) => {
        window.location.href = `/#/${location}`;
        handleClose();
    }
  return (
    <div className={classes.root}>
      {/* <AppBar style={{borderRadius: "15px"}} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
                  <Button color="inherit" onClick={handleClick}>{"Login"}</Button>
                  <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
      >
        <MenuItem onClick={() => pushToPage("profile")}>Profile</MenuItem>
        <MenuItem onClick={() => pushToPage("settings")}>Settings</MenuItem>
        <MenuItem onClick={() => pushToPage("logout")}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar> */}
    </div>
  );
}

const mapStateToProps = (state: object) => {
    return state;
}
export default connect(mapStateToProps)(NavBar);