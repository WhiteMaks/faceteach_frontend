import React from "react";
import style from "./style/about.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const About = (props) => {
    return(
        <div className={style.prof_about}>
            <div className={style.prof_about_img}>
                <img alt={"avatar"} src={props.data.urlImg}/>
            </div>
            <div className={style.prof_about_info}>
                <div className={style.block_about}>
                    <div className={style.info_full_name}>{`${props.data.secondName} ${props.data.firstName} ${props.data.middleName}`}</div>
                    <div className={style.info_date_of_birth}>Дата рождения: <i>{props.data.dataOfBirth}</i></div>
                </div>
                <div className={style.about_lvl}>Страна: <i>{`${props.data.country}`}</i></div>
                <div className={style.about_lvl}>Уровень: <i>{`${props.data.level}`}</i></div>
                <div className={style.about_my_lessons}>Владение предметом: <i>{props.data.lessons.join(", ")}</i></div>
                <div className={style.about_me}>Информация:
                    <div>
                        <i>{props.data.about}</i>
                    </div>
                </div>
            </div>
            <div className={style.edit_profile}>
                <Link to={props.editUrl} >
                    <button><i className={`fas fa-pen inline_button`}/>Редактировать</button>
                </Link>
            </div>
        </div>
    );
}

let stateData = (state) => {
    return(
        {data: state.profile.data}
    );
}

const AboutContainer = connect(stateData, null)(About);

export default AboutContainer;