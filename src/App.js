import './app.module.css';
import React from "react";
import style from "./app.module.css"
import Header from "./common/Header";

function App() {
    return(
        <div className={style.wrapper}>
            <Header />
            <div className={style.content}>
                <div className={style.profile}>
                    <div className={style.prof_about}>
                        <div className={style.prof_about_img}></div>
                        <div className={style.prof_about_info}></div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
