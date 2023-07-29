import React from "react"
import s from "./Preloader.module.css"
import preloader from "../../../assets/gifs/123.gif"

let Preloader:React.FC = () => {
    return <div className={s.container}>
        <img src={preloader} alt={"preloader"}/>
    </div>
}

export default Preloader