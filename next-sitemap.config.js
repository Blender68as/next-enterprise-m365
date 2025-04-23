/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://behörde.digital',
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
  