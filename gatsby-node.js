
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const fundTemplate = path.resolve(`src/templates/fundTemplate.js`);
  
  return graphql(`
    query loadFundsQuery{
          melon {
            funds(where: {isShutdown: false}, first: 10) {
              id
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          throw result.errors
      }

      result.data.melon.funds.forEach(({id}) => {

        createPage({
          path: `/${id}`,
          component: fundTemplate,
          context: {
            id: `${id}`,
            },
          })
        }
      )
    })
  }

