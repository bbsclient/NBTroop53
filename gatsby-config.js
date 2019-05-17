module.exports = {
  siteMetadata: {
    title: `New Berlin Troop 53`,
    description: `Potawatomi Area Council Scouts BSA Troop 53 from New Berlin`,
    author: `Mike Miller`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `newberlin-troop-53`,
        short_name: `troop53`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#CE1126`,
        display: `minimal-ui`,
        icon: `src/images/bsa.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/gallery`,
      },
    },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    `gatsby-plugin-sharp`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    `gatsby-transformer-sharp`,    
  ]
};