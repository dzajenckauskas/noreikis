import { createTheme } from '@mui/material/styles';
import { Work_Sans, Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["300", "400", "500", "600"], subsets: ['latin-ext'] })
const workSans = Work_Sans({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ['latin-ext'] })

export const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => theme.unstable_sx({
                    borderRadius: 0,
                    backgroundColor: theme.palette.info.main
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
                    borderRadius: 0,
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
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: ({ theme }) => theme.unstable_sx({
                    borderRadius: 0,

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
        },
        secondary: {
            main: '#00F'
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
            main: '#00F'
        }
    }
})

export const getTheme = () => {
    return theme
}