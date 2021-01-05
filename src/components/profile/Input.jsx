import React from "react";

const Input = (props) => {
    return(
        <div className={props.className}>
            <label>{props.label}</label>
            <input maxLength={"25"} type={props.type} placeholder={props.placeholder} value={props.value}/>
        </div>
    );
}

export default Input;