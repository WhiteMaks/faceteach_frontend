import React from "react";
import style from "./style/header.module.css"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import Error from "./Error";

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

class HeaderRest extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:8080/api/user").then(response => {
            this.props.requestGetSubjects(response.data)
            this.props.setIsReady(true)
        }).catch(() => {
            this.props.setError("Сервер не доступен! Пожалуйста, попробуйте позднее!");
            this.props.setIsReady(true)
        });
    }

    componentWillUnmount() {
        this.props.setIsReady(false);
        this.props.setError(null);
        this.props.requestGetSubjects([]);
    }

    render() {
        return(this.props.error == null ? <Header isAuth={this.props} urlSchedule={this.props} urlSheets={this.props} urlTasks={this.props} urlProfile={this.props} /> : <Error message={this.props.error}/>);
    }
}

export default Header;