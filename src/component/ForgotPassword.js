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
    Import styles for material-ui
*/
const styles = {
    formControl:{
        margin: "15px 0px"
    },
    title: {
        fontSize: "36px",
        fontWeight: "bold"
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
            <div>
                <Grid container justify="center">
                    <Grid item xs={4} >
                        <Card>
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