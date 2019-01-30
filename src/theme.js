import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff5722',
            light: '#ff8a50',
            dark: '#c41c00',
            contrastText: '#000000'
        },
        secondary: {
            main: '#ffa726',
            light: '#ffd95b',
            dark: '#c77800',
            contrastText: '#f5f5f5'
        }
    },
    typography: {
        useNextVariants: true,
    },
});

export default theme