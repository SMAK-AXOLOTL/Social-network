import React from "react";
import {Navigate} from "react-router-dom";

let Redirector = (props) => {

    return <Navigate to={props.to}/>
}

export default Redirector