import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";

export default class Page extends React.Component{

  render(){

    return (
    <div>
       {console.log("Passed props:", this.props)}
      <Site
      // data from pageContext 
      id = {this.props.pageContext.id}
      //name = {this.props.pageContext.name}
      // data from pageQuery
      fund = {this.props.data.melon.fund}
      >
      </Site>
    </div>
    )
  }
}

export const query = graphql`
  query MyFundQuery ($id: ID!) {
    melon{
        fund(id: $id) {
        name
        createdAt
        sharePrice
        totalSupply
        gav
        nav
        }
      }
    }
  `;