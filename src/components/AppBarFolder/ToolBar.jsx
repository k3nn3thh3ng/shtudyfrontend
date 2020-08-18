import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Button, IconButton, Typography } from '@material-ui/core';
import { LocalLibrary, LibraryBooks} from '@material-ui/icons';


import Search from './Search';


const styles = (theme) => ({
    title: {
    fontSize: 24,
    marginRight: theme.spacing(2),
    paddingRight: theme.spacing(4)
    },
    logoButton: {
    marginRight: theme.spacing(1),
    },
    categories: {
    },
    grow: {
        flexGrow: 0.5
    },
    search: {
        flexGrow: 2,
        display: 'flex',
        justifyContent: 'center'
    }
});

function AppBar(props) {
  const { classes } = props;
  return (
    <Toolbar >
        <IconButton 
            edge="start"
            color="inherit"
            className={classes.logoButton}
        >
            <LocalLibrary />
        </IconButton>

        <Typography className={classes.title} >
            SHTUDY
        </Typography>

        <div className={classes.search}>
            <Search />
        </div>

        <div className={classes.grow} />

        <IconButton 
            edge="start"
            color="inherit"
            className={classes.logoButton}
        >
            <LibraryBooks />
        </IconButton>



        <Button>
            LOGIN
        </Button>

        <Button>
            SIGNUP
        </Button>

    </Toolbar>
  )
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);


