import React from "react";
import style from "./style/edit.module.css";
import Textarea from "./Textarea";
import {changeAbout, saveAbout} from "../../redux/profileReducer";
import {connect} from "react-redux";

const Edit = (props) => {
    let aboutElement = React.createRef();
    return(
        <div className={"component"}>
            <div className={style.block_form}>
                {/*<Input name={"firstName"} label={"Имя"} type={"text"} placeholder={props.data.firstName} />*/}
                {/*<Input label={"Фамилия"} type={"text"} placeholder={props.data.secondName} />*/}
                {/*<Input label={"Отчество"} type={"text"} placeholder={props.data.middleName} />*/}
                {/*<Input label={"Предметы"} type={"text"} />*/}
                <Textarea click={() => props.clickAbout(props.data.about)} change={() => props.changeAbout(aboutElement.current.value)} refReact={aboutElement} label={"О себе"} placeholder={props.data.about} value={props.data.newData.about} />
                <div>
                    <button onClick={() => props.saveAbout()}><i className="fas fa-cloud-upload-alt inline_button"/>Сохранить</button>
                </div>
            </div>
        </div>
    );
}

let stateData = (state) => {
    return(
        {data: state.profile.data}
    )
}

const EditContainer = connect(stateData, {clickAbout: changeAbout, changeAbout, saveAbout})(Edit)

export default EditContainer;