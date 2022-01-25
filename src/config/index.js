const production = require('./production').default;
const staging = require('./staging').default;

const configs = {
  production,
  staging,
};

export default {
  port: process.env.PORT,
  defaultLocale: 'en',
  remoteApiUrl: 'https://github.com/snphq/react-starter-boilerplate',
  htmlMinifier: {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
  },
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Rick and Morty characters',
    link: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
    ],
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.',
      },
    ],
  },
  robots: [
    {
      userAgent: '*',
      disallow: '/',
    },
  ],
  ...configs[process.env.APP_ENV],
};
