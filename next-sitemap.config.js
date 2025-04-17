/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://yourdomain.de',
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
  