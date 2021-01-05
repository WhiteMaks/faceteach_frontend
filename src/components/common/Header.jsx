import React from "react";
import style from "./style/header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={style.header}>
            <ul className={style.hed_ul}>
                <li><NavLink to={props.urlSchedule}>Моё расписание</NavLink></li>
                <li><NavLink to={props.urlSheets}>Список предметов</NavLink></li>
                <li><NavLink to={props.urlTasks}>Задания</NavLink></li>
                <li><NavLink to={props.urlProfile}>Профиль</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;