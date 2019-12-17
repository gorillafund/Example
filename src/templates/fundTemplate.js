import React from "react";
import { graphql } from "gatsby";
import Site from "../components/Site";

export default class Page extends React.Component{

  render(){

    return (
      <div>
        {console.log("Passed props:", this.props)}
        <Site
         id = {this.props.pageContext.id}
         fund = {this.props.data.melon.fund}
         calculationsHistory = {this.props.calculationsHistory}
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
        first: calculationsHistory (first: 100){
          sharePrice
          timestamp
          }
        second: calculationsHistory (skip: 100){
          sharePrice
          timestamp
          }
        third: calculationsHistory (skip: 200){
          sharePrice
          timestamp
          }
        fourth:  calculationsHistory (skip: 300){
          sharePrice
          timestamp
          }
        fifth: calculationsHistory (skip: 400){
          sharePrice
          timestamp
          }
        }
      }
    }
  `;