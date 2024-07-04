import { createTheme } from '@mui/material/styles';
import { Source_Sans_3, Merriweather_Sans } from "next/font/google";

const headings = Merriweather_Sans({ weight: ["400", "500", "600"], subsets: ['latin-ext'] })
const text = Source_Sans_3({ weight: ["400", "500", "600", "700"], subsets: ['latin-ext'] })

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
                    // textTransform: 'none',
                    letterSpacing: .5,
                    px: 4,
                    fontFamily: headings.style.fontFamily,
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
            fontFamily: headings.style.fontFamily,
            fontSize: 72,
            letterSpacing: 1,
        },
        h2: {
            fontFamily: headings.style.fontFamily,
        },
        h3: {
            letterSpacing: 1,
            fontFamily: headings.style.fontFamily,
        },
        h4: {
            fontFamily: headings.style.fontFamily,
        },
        h5: {
            letterSpacing: 1,
            fontFamily: headings.style.fontFamily,
        },
        h6: {
            fontFamily: headings.style.fontFamily,
        },
        body1: {
            fontFamily: text.style.fontFamily,
        },
        body2: {
            fontFamily: text.style.fontFamily,
        },
        subtitle2: {
            fontSize: 18,
            fontFamily: text.style.fontFamily,
        },
        caption: {
            fontFamily: text.style.fontFamily,
        }
    },
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#BBA591',
            // main: '#00F'
        },
        info: {
            main: '#ffffff',
        },
        text: {
            primary: '#000',
            secondary: '#727175',
            disabled: '#7d7c83',
        },
        error: {
            main: '#BBA591',
        }
    }
})

export const getTheme = () => {
    return theme
}