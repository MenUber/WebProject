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
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

/*
    Import logo 
*/
import logo from '../logo.svg'

/*
 Import components
*/
import Register from './Register'
import ForgotPassword from './ForgotPassword'

/*
    Import styles for material-ui
*/
const styles = {
    formControl:{
        margin: "15px 0px"
    },
    img: {
        width: "100%",
        margin: "20px 0px"
    },
    title: {
        fontSize: "36px",
        fontWeight: "bold"
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
            <div>
                <Grid container justify="center">
                    <Grid item xs={4} >
                        <Card>
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
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                label='Email'
                                                variant="outlined"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                label='Contraseña'
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
                                <Grid container justify="center">
                                    <Grid item>
                                    <Router>
                                        <Typography component="p">
                                            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                                            <Route path="/forgot-password" exact component={ForgotPassword} />
                                        </Typography>
                                    </Router>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Grid container justify="center">
                            <Grid item>
                                <Router>
                                    <Typography component="p">
                                        ¿No tienes una cuenta?
                                        <Link to="/register"> Registrate</Link>
                                        <Route path="/register" exact component={Register} />
                                    </Typography>
                                </Router>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

// export default Login
export default withStyles(styles)(Login)