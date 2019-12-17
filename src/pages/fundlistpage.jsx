import React from "react"
import { graphql } from 'gatsby';
import StaticSite from "../components/StaticSite"
import FundListItem from "../components/FundListItem";
import FundList from "../components/FundList";
import { Link } from "gatsby";


export const GATSBY_QUERY = graphql`{
    melon {
      funds(orderBy: name, first: 10, where: {isShutdown: false}) {
       name
       id
      }
    }
  }`

export default ({ data })  => {
  
  return(
      <StaticSite title="Funds on the Melon-Network">
        <FundList>
            {data.melon.funds.map(({name,id}) => (
                <Link to={id}> 
                  <FundListItem id={id} name={name}/>
                </Link>
            ))
          }
      </FundList>
      </StaticSite>
  )};
  