const { i18n } = require('./i18n.js');

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

module.exports = nextConfig;