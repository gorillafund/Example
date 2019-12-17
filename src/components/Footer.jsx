import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby";
import melonImage from "../../media/melonsmall.png";

export default () => (

    <StaticQuery
        
        query={graphql`
            query FooterQuery {
                site {
                    siteMetadata{
                        footer1
                        footer2
                        footer3
                        }
                    }
                }
            `}
        
        
        render = {
                data => (
                    <div className="footer">
                            <div className="footerChild">
                                <div>
                                    <img src={melonImage} alt="melon_logo"/>
                                    Powered By Melon Protocol
                                </div>
                            </div> 
                            <div className="footerChild">        
                                <Link to={data.site.siteMetadata.footer1}>
                                    <h6>
                                        About
                                    </h6>
                                </Link>
                            </div>
                    </div>
                )}
            />
        ); 