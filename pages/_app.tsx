import { getTheme } from '@/components/layout/Theme';
import '@/styles/globals.css';
import 'animate.css';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import nextI18NextConfig from '../next-i18next.config.js';
import 'react-alice-carousel/lib/alice-carousel.css';

function MyApp({ Component, pageProps }: AppProps) {
  let theme = getTheme()
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp, nextI18NextConfig)