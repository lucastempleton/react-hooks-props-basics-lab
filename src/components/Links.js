import React from "react";

function Links(props){
    return (
        <h3>Links
         <a href = {props.user.links.github}>{props.user.links.github}</a>
         
         <a href = {props.user.links.linkedin}>{props.user.links.linkedin}</a>
        </h3>
    )
}
export default Links