import './app.module.css';
import React from "react";
import style from "./app.module.css"
import Header from "./common/Header";
import Profile from "./components/Profile";

function App() {
    return(
        <div className={style.wrapper}>
            <Header />
            <div className={style.content}>
                <Profile />
            </div>
        </div>
  );
}

export default App;
