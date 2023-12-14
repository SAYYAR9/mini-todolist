import React from "react";



function Title (props) {
    
    // console.log('title rendered');

    return (
        <h1>{props.text}</h1>
    )
}

export default React.memo(Title) 