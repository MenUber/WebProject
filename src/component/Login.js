import React,{ Component } from 'react'

import {
    Grid,
    Card,
    Typography,
    Button,
    CardContent,
    TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import logo from '../logo.svg'

const styles = {
    formControl:{
        margin: "15px 0px"
    },
    img: {
        width: "100%",
        margin: "20px 0px"
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
                                        <Typography variant="h3">
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
                                        <Typography component="p">
                                            ¿Olvidaste tu contraseña?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <Grid container justify="center">
                            <Grid item>
                                <Typography component="p">
                                    ¿No tienes una cuenta?. Regístrate
                                </Typography>
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