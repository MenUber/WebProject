import React from 'react';
import PropTypes from 'prop-types';

/*
    Import Material Design modules
*/
import {
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Collapse,
    Divider,
    Typography
} from '@material-ui/core';
import {
    Dashboard,
    Fastfood,
    List as ListItemFood,
    Person
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


/*
    Import logo 
*/
import logo from '../../logo.svg';


const widthBar = "240px";
const styles = {
    root:{
        width: "100%",
    },
    logoContainer: {
        margin: '20px'
    },
    logoHeader: {
        width: "100%",
        height:'auto',
    },
    drawer:{
        width: widthBar,
        height: "100vh"
    },
    drawerPaper:{
        width: widthBar,
        background: "#ff5722",
        textColor: "white"
    },
    iconList: {
        color: "white"
    },
    dividerItem: {
        color: "white"
    }
}

const ItemsArray = [ 
    {
        name: "Dashboard",
        childrens: [] 
    },
    {
        name: "Perfil",
        childrens: []
    },
    {
        name: "Lista de Menú",
        childrens: [],
    },
    {
        name: "Comida",
        childrens: []
    }
];


const getIcon = (index) => {
    switch (index) {
        case 0:
            return <Dashboard />;

        case 1:
            return <Person />;

        case 2:
            return <ListItemFood />;
        
        case 3:
            return <Fastfood />;

        default:
            break;
    }
}


function leftBar(props) {
    const { classes } = props;

    return(
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left">
                <div className={classes.logoContainer}>
                    <img className={classes.logoHeader} src={logo} alt='icon'></img>
                </div>
                <Divider className={classes.dividerItem}/>
                <List
                    component="nav"
                     
                    >
                    {/* <ListItem button >
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Perfil"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <ListItemFood />
                        </ListItemIcon>
                        <ListItemText primary="Lista Menu"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <Fastfood />
                        </ListItemIcon>
                        <ListItemText primary="Comida"/>
                    </ListItem> */}
                    {
                        ItemsArray.map( (element,index) => {
                            console.log(element)
                            return element.childrens.length === 0
                                ?
                                    <ListItem 
                                        key={index}
                                        // selected
                                        button>
                                        <ListItemIcon className={classes.iconList}>
                                            {getIcon(index)}
                                        </ListItemIcon>
                                        <ListItemText inset primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{element.name}</Typography>}/>
                                    </ListItem>
                                :
                                    <div key={index}>
                                        <ListItem 
                                            button 
                                            key={index}
                                        >
                                            <ListItemText primary={element.name}/>
                                        </ ListItem>
                                        <Collapse in="true">
                                            <List component="div" disablePadding>
                                                {
                                                    element.childrens.map( (e,i) => (
                                                        <ListItem button key={i}>
                                                            <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>{e}</Typography>} />
                                                        </ListItem>
                                                    ))
                                                } 
                                            </List>
                                        </Collapse>
                                    </div>
                        })
                    }
                </List>
            </Drawer>
        </div>
    )
}

export default withStyles(styles)(leftBar);