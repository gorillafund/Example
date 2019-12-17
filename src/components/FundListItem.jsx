import React from 'react';

export default (props) => (
    <div className="fundListItem">
                <h3>{props.name}</h3> 
                <h4>Contract Address: {props.id}</h4>
        </div>
  );