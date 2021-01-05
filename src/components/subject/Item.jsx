import React from "react";
import style from "./style/item.module.css";
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return(
        <div className={style.item}><NavLink to={`${props.generalUrl}/${props.subjectId}`}>{props.subjectName}</NavLink></div>
    );
}

export default Item;