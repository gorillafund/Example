
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const fundTemplate = path.resolve(`src/templates/fundTemplate.js`);
  
  return graphql(`
    query loadFundsQuery{
          melon {
            funds(orderBy: name, first: 10, where: {isShutdown: false}) {
              id
              name
            }
          }
        }`
    ).then(result => {
      if (result.errors) {
        throw result.errors
    }

    const nodes = result.data.melon.funds;
    
    nodes.forEach(({id}) => {

      createPage({
        path: `/${id}`,
        component: fundTemplate,
        context: {
          id: `${id}`,
          },
        })
      })   
    })
  } 


