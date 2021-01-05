import React from "react";
import style from "./style/error.module.css"
import {Link} from 'react-router-dom'

const Error = (props) => {
    return(
        <div className={"modal_wrapper"}>
            <div className={style.modal_error}>
                <div className={style.modal_header}>Ошибка!</div>
                <div>{props.message}</div>
                <div><Link to={"/"} className={style.error_ok}><button className={"button_error"}>Ок</button></Link></div>
            </div>
        </div>
    );
}

export default Error;