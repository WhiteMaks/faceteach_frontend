import React from "react";
// import style from "./style/profile.module.css";
import About from "./profile/About";

const Profile = (props) => {
    return (
        <div className={"component"}>
            <About editUrl={`${props.url}${props.editPath}`}/>
        </div>
    );
}

export default Profile;