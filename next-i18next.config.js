const { initReactI18next } = require('react-i18next');
const localeDetection = false

module.exports = {
  i18n: {
    defaultLocale: 'lt',
    locales: ['en', 'lt'],
    localeDetection
  },
  serializeConfig: false,
  use: [initReactI18next],
  reloadOnPrerender: true,
  debug: false
};