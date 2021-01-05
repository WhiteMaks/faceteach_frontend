import React from "react";

const Textarea = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <textarea onClick={props.click} onChange={props.change} ref={props.refReact} maxLength={"850"} placeholder={props.placeholder} value={props.value} />
        </div>
    );
}

export default Textarea;