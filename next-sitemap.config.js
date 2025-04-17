/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://behördedigital.de',
    generateRobotsTxt: true,
    exclude: ['/impressum', '/datenschutz'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          disallow: ['/impressum', '/datenschutz'],
        },
      ],
    },
  }
  