const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mwrfbv66ndt8`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "i6eKGNq-IIoK-k78jlaPZ2yjM29wyqXYT8GAL9G3eio",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
