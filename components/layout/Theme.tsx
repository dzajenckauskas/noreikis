import { createTheme } from '@mui/material/styles';
import { Work_Sans, Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["300", "400", "500", "600"], subsets: ['latin-ext'] })
const workSans = Work_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ['latin-ext'] })

export const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    borderRadius: 0
                }),
                input: ({ theme }) => theme.unstable_sx({
                    backgroundColor: theme.palette.info.main
                }),
                multiline: ({ theme }) => theme.unstable_sx({
                    backgroundColor: theme.palette.info.main
                })
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    color: `${theme.palette.primary.dark}`,
                    borderRadius: 0
                }),
            }
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    borderRadius: 0,
                    textTransform: 'none',
                })
            }
        }
    },
    typography: {
        h1: {
            fontFamily: rubik.style.fontFamily,
            fontSize: 72,
        },
        h2: {
            fontFamily: rubik.style.fontFamily,
            // fontSize: 52
        },
        h3: {
            fontFamily: rubik.style.fontFamily,
        },
        h4: {
            fontFamily: rubik.style.fontFamily,
        },
        h5: {
            fontFamily: rubik.style.fontFamily,
        },
        h6: {
            fontFamily: rubik.style.fontFamily,
        },
        body1: {
            fontFamily: workSans.style.fontFamily,

        },
        body2: {
            fontFamily: workSans.style.fontFamily,

        },
        caption: {
            fontFamily: workSans.style.fontFamily,

        }
    },
    palette: {
        primary: {
            main: '#000'
            // light: '#606CBD',
            // main: '#3A4AB0',
            // dark: '#2B3996'
        },
        secondary: {
            main: '#00F'
            // light: '#E14385',
            // main: '#E70E69',
            // dark: '#D50B5F'
        },
        info: {
            main: '#ffffff'
        },
        text: {
            primary: '#000',
            secondary: '#727175',
            disabled: '#7d7c83',
        },
        error: {
            main: '#ff4857',
        }
        // yellow: '#ffc808',
        // green: '#5bbb58'
    }
})

export const getTheme = () => {
    return theme
}