import React,{ Component } from 'react';

/*
    Import Material design modules
*/
import {
    Grid
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
/*
    Import components
*/
import LeftBar from '../templates/LeftBar';
import AppBar from '../templates/AppBar'

const styles = {
    root: {
        display: 'flex'
    }
}

class Dashboard extends Component{
    render(){
        const { classes } = this.props
        return(
            <div className={classes.root}>
                <AppBar></AppBar>
                <LeftBar></LeftBar>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);