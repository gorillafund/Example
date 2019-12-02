
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const fundTemplate = path.resolve(`src/templates/fundTemplate.js`);
  
  return graphql(`
    query loadFundsQuery{
          melon {
            funds(where: {isShutdown: false}, first: 10) {
              id
              name
          }
        }
      }`
  ).then(result => {
      if (result.errors) {
        throw result.errors
      }

      let i = 0;
      let prev = 0;
      let next = 0;
      console.log(result.data.melon.funds.length);
      let fundcount = result.data.melon.funds.length;

      result.data.melon.funds.forEach(({id, name}) => {
          
          if( i != 0 ){
            prev = i - 1;
          } else {
            prev = i;
          }
          if ( i != fundcount - 1 ) { 
            next = i + 1;
          } else {
            next = fundcount - 1;
          }

          createPage({
            path: `/${id}`,
            component: fundTemplate,
            context: {
              id: `${id}`,
              index: `${i}`,
              previous: `${prev}`,
              next: `${next}`,
              name: `${name}`,
              },
            })

          if ( i < fundcount ){
            i = i + 1;
          }
        }
      )
    }
  )
}

