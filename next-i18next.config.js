const { initReactI18next } = require('react-i18next');

module.exports = {
  i18n: {
    defaultLocale: 'lt',
    locales: ['lt'],
  },
  serializeConfig: false,
  use: [initReactI18next],
  reloadOnPrerender: true,
  debug: false
};