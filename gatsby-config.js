/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const api_mainnet = "https://api.thegraph.com/subgraphs/name/melonproject/melon"
const api_kovan = "https://api.thegraph.com/subgraphs/name/melonproject/melon-kovan"
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
      typeName: 'MELON',
      fieldName: 'melon',
      url: `${api_mainnet}`,
      //url: `${api_kovan}`,
      },
    },
  ]
}
