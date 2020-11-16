import React from "react";
import style from "./style/header.module.css"

const Header = () => {
    return(
        <header className={style.header}>
            <ul className={style.hed_ul}>
                <li><a href="#s">Моё расписание</a></li>
                <li><a href="#s">Список предметов</a></li>
                <li><a href="#s">Задания</a></li>
                <li><a href="#s">Профиль</a></li>
            </ul>
        </header>
    );
}

export default Header;