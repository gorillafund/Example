import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";


export default class Page extends React.Component{

  constructor(props) {
      super(props); 
  }

  render(){
    return (
    <div>
       {console.log("Passed props:", this.props)}
      <Site
      // data from pageContext 
      name={this.props.pageContext.name} 
      index={this.props.pageContext.index} 
      next={this.props.pageContext.next} 
      id={this.props.pageContext.id}
      previous={this.props.pageContext.previous}
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