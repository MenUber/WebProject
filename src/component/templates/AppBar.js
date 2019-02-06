import React from 'react';
import PropTypes from 'prop-types';

/*
    Import Material Design modules
*/
import {
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Avatar
} from '@material-ui/core';
import {
    Mood
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const widthBar = "240px";
const styles = {
    root: {
        display: 'flex',
        marginLeft: widthBar
    },
    toolBar: {
        marginLeft: widthBar
    }
}


function AppBarComponent(props){
    const { classes } = props;

    return(
        <div className={classes.root}>
            <AppBar position="fixed" >
                <Toolbar className={classes.toolBar}>
                    <Avatar alt="Remy Sharp" className={classes.avatar}>
                        <Mood />
                    </Avatar>
                    <Typography variant="h6" color="inherit">Hola Gerson</Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default withStyles(styles)(AppBarComponent)