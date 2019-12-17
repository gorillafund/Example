import React from 'react';
import StaticSite from "./StaticSite";

const Site = (props) => {
    console.log("Site:",{props})
    return (
        <StaticSite>
            <h3> Fund-Name: {props.fund.name}</h3>
            <h3> Fund-Address: {props.id}</h3>
            {console.log(props.calculationsHistory)}
        </StaticSite>
        )
    }

  export default Site

//import React from 'react';
//import Header from "./Header";
//import Footer from "./Footer";
//import ContainerRight from "./ContainerRight";
//import ContainerLeft from "./ContainerLeft";
//import Content from "./Content";
//import Fund from "./Fund";
//import DynamicMenu from "./DynamicMenu";
//import "../utils/typography";

/*const Site = (props) => {
    console.log("Site:",{props})
    return (
        <div>
            <h3> Fund-Name: {props.fund.name}</h3>
            <h3> Fund-Address: {props.id}</h3>
        </div>
    )
  }

  export default Site*/

  /*<div className="Container">
  <ContainerLeft previous={props.previous}/>
  <Header investments={props.fund.investments}/>
  <DynamicMenu 
      fundAddress={props.id} 
      participationContractAddress={props.fund.participation.id} 
      accountingContractAddress={props.fund.accounting.id}
      allowedAssets={props.fund.participation.allowedAssets} 
      investments={props.fund.investments}
      title="Explore the funds"/>
        <Content content={props.content}>
          <Fund 
          fund={props.fund} 
          id={props.id} 
          participationContractAddress={props.fund.participation.id} 
          assets = {props.assets}
          /> 
        </Content>
  <Footer/>
  <div className="Spacer grid-element-center"/>
  <ContainerRight next={props.next}/> 
</div>*/