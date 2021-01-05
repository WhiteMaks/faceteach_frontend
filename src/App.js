import './app.module.css';
import React from "react";
import style from "./app.module.css"
import Header from "./components/common/Header";
import Profile from "./components/Profile";
import Subjects from "./components/Subjects";
import {BrowserRouter, Route} from "react-router-dom";
import EditProfile from "./components/profile/Edit";

const urlSchedule = "/schedule";
const urlSheets = "/subjects";
const urlTasks = "/tasks";
const urlProfile = "/profile";
const editPath = "/edit";

function App(props) {
    return(
        <BrowserRouter>
            <div className={style.wrapper}>
                <Header urlSchedule={urlSchedule} urlSheets={urlSheets} urlTasks={urlTasks} urlProfile={urlProfile} />
                <div className={style.content}>
                    <Route path={urlSheets} render={() => <Subjects url={urlSheets} />}/>
                    <Route exact path={urlProfile} render={() => <Profile url={urlProfile} editPath={editPath} />}/>
                    <Route path={`${urlProfile}${editPath}`} render={() => <EditProfile />}/>
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
