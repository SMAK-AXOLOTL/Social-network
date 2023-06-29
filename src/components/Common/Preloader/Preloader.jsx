import React from "react"
import s from "./Preloader.module.css"
import preloader from "../../../assets/gifs/123.gif"

let Preloader = (props) => {
    return <div className={s.container}>
        <img src={preloader}/>
    </div>
}

export default Preloader