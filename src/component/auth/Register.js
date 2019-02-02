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
        height: "120vh",
        backgroundColor: "#F5F5F5"
    },
    titlePag: {
        color: "#47525E",
        fontSize: "50px"
    },
    formControl:{
        margin: "15px 0px"
    },
    gridTitle: {
        display: "flex",
        justifyContent: "center",
        marginTop:"30px"
    },
    title: {
        color: "#47525E",
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "15px"
    },
    imgLogo: {
        width: "70px",
        height: "70px",
        marginRight: "15px"
        // ['@media(min-width:780px)']: {
        //     width: "200px",
        //     height: "200px"
        // }
    },
    card: {
        marginTop:"30px"
    }
}

class Register extends Component {
    constructor(props)
    {
        super(props);
    }
    
    render(){
        const { classes } = this.props;

        return(
            <div>
                <Grid container justify="center" alignContent="center">
                    <Grid item xs={4} className={classes.gridTitle}>
                        <img src={logo} alt="Imagen" className={classes.imgLogo}/>                  
                    {/* </Grid>
                    <Grid item xs={3}> */}
                        <Typography component="p" className={classes.titlePag}>
                            Menuber
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={12} sm={10} md={6} lg={6} xl={4} >
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Typography variant="h3" className={classes.title}>
                                            Registro
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <form>
                                    <Grid container justify="center">
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label='Nombres'
                                                variant="outlined"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label='Apellidos'
                                                variant="outlined"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label='Celular'
                                                variant="outlined"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label='DNI'
                                                variant="outlined"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label='Email'
                                                variant="outlined"
                                                type="email"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
                                            <TextField
                                                fullWidth
                                                label='Contraseña'
                                                variant="outlined"
                                                type="password"
                                                className={classes.formControl}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={10} md={8}>
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

export default withStyles(styles)( Register )