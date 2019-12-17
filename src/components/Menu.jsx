import React from "react"
import { Link } from "gatsby"

export default (props) => (
    
          < div className="menu">
                <h5>
                     {props.title}
                </h5>
                <h5>
                    <Link to="/fundlistpage">
                        Explore the Funds
                    </Link>
                </h5>
            </div>
)

