import React from 'react';
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

const StaticSite = (props) => {
    return (
        <div className="staticSite">
        <Header/>
        <Menu title={props.title}/>
        <Content>
              {props.children}
        </Content>
        <Footer/>
        </div>
    )
  }

  export default StaticSite
  