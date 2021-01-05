import React from "react";
import Item from "./subject/Item";
import {connect} from "react-redux";
import {requestGetSubjects, setError, setIsReady} from "../redux/subjectsReducer";
import * as axios from "axios";
import Preloader from "./common/Preloader";
import Error from "./common/Error";

let stateData = (state) => {
    return(
        {
            data: state.subjects.data,
            isReady: state.subjects.isReady,
            error: state.subjects.error
        }
    );
}

const Subjects = (props) => {
    return(
        <div className={"component"}>
            {props.data.map(subject => <Item key={subject.id} generalUrl={props.url} subjectId={`${subject.id}`} subjectName={subject.name}/>)}
        </div>
    );
}

class SubjectsRest extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:8080/api/subject/all").then(response => {
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
        return(!this.props.isReady ? <Preloader /> : (this.props.error == null ? <Subjects data={this.props.data} url={this.props.url} /> : <Error message={this.props.error}/>));
    }
}

const SubjectsContainer = connect(stateData, {requestGetSubjects, setIsReady, setError})(SubjectsRest)

export default SubjectsContainer;