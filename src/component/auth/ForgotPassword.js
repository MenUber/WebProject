import React,{ Component } from 'react'

/*
    Import Material Design modules
*/
import {
    Grid,
    Card,
    Typography,
    Button,
    CardContent,
    TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

/*
    Import logo 
*/
import logo from '../../logo.svg'

/*
    Import styles for material-ui
*/
const styles = {
    root: {
        height: "100vh",
        backgroundColor: "#F5F5F5"
    },
    titlePag: {
        color: "#47525E",
        fontSize: "50px"
    },
    formControl:{
        margin: "15px 0px"
    },
    title: {
        color: "#47525E",
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "15px"
    },
    imgLogo: {
        width: "80%"
    },
    card: {
        marginTop:"100px"
    }
}

class ForgotPassword extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        const { classes } = this.props

        return(
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={1}>
                        <img src={logo} alt="Imagen" className={classes.imgLogo}/>                  
                    </Grid>
                    <Grid item xs={4}>
                        <Typography component="p" className={classes.titlePag}>
                            Menuber
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={4} >
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Typography variant="h3" className={classes.title}>
                                            Reiniciar Contraseña
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <form>
                                    <Grid container justify="center">
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                label='Email'
                                                variant="outlined"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                fullWidth
                                                className={classes.formControl}
                                            >
                                                Iniciar Sesión
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ForgotPassword)