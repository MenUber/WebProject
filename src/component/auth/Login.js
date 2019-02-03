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
    Import React Router
*/
import { 
    Link
} from 'react-router-dom';

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
    formControl:{
        margin: "15px 0px"
    },
    img: {
        width: "100%",
        margin: "20px 0px"
    },
    title: {
        color: "#47525E",
        fontSize: "36px",
        fontWeight: "bold"
    },
    card: {
        marginTop:"20px",
        ["@media (min-width:600px)"]: {
            marginTop:"100px",
        }
    },
    textUp: {
        color:"#000000"
    },
    cardDown: {
        marginTop: "15px",
        padding: "15px 0px"
    },
    textDown: {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#2C127F0"
    }
}

class Login extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){

        const { classes } = this.props
        return(
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={10} md={6} lg={6} xl={4} >
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Typography variant="h3" className={classes.title}>
                                            Iniciar sesión
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justify="center">
                                    <Grid item xs={4}>
                                        <img src={logo} alt="Imagen" className={classes.img}/>
                                    </Grid>
                                </Grid>
                                <form>
                                    <Grid container justify="center">
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                variant="outlined"
                                                type="email"
                                                margin="dense"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label="Contraseña"
                                                variant="outlined"
                                                type="password"
                                                margin="dense"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                fullWidth
                                                className={classes.formControl}
                                            >
                                                Iniciar Sesión
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Typography component="p">
                                            <Link className={classes.textUp} to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Card className={classes.cardDown}>
                            <Grid container justify="center">
                                <Grid item>
                                    <Typography component="p" className={classes.textDown}>
                                        <Link className={classes.textDown} to="/register">Crear una cuenta</Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles( styles )( Login )