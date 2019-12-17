import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import gorilla from "../../media/gorilla.svg";

export default () => (
    
    <StaticQuery
        
        query={graphql`
            query StaticHeadingQuery {
                site {
                    siteMetadata{
                        title
                        }
                    }
                }
            `}
        
        
        render = { data => (
                <div className="header">
                    <img className="logoImage" src={gorilla} alt="logo"></img>
                        <div className="title">
                            <h1 style={{color:"rgba(255,255,255,0.9)"}}>
                                {data.site.siteMetadata.title}
                            </h1>
                        </div>
                </div>
            )}
    />
); 