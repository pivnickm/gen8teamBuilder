module.exports = {
  pathPrefix: "/gen8teamBuilder",
  siteMetadata: {
    title: `Pokemon Sword / Shield Team Builder`,
    description: `Pick a team of Pokemon for Sword and Shield and see weaknesses and immunties`,
    author: `Matt Pivnick`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sword Shield Team Builder`,
        short_name: `SwShTeamBuilder`,
        start_url: `/`,
        background_color: `#0277bd`,
        theme_color: `#0277bd`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
