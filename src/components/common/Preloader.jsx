import React from "react";
import style from "./style/preloader.module.css"
import preloader from "./img/preloader.svg"

const Preloader = (props) => {
    return(
        <div className={style.preloader_container}>
            <img src={preloader}/>
        </div>
    );
}

export default Preloader;