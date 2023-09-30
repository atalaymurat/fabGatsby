module.exports = {
  siteMetadata: {
    title: `Fabromak Makine İthalat İhracat Sanayi ve Ticaret`,
    description: `Ahşap İşleme Makinaları Satış, Servis, Yedek Parça, Giardina Group, Costa Levigatrici Türkiye Distribütörü`,
    author: `@fabromak`,
    siteUrl: `https://fabromak.com.tr`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName
          if (name === "machines") {
            return "Machine"
          }
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `machines`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/giardina-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
