module.exports = {
  siteMetadata: {
    title: `Catherine Siller Blog`,
    siteURL: 'https://www.catherine-siller.com/',
    siteName: 'Catherine Siller Blog',
    author: `Catherine Siller`
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`
  ],
}
