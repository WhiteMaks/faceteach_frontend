import React from "react";
import style from "./style/profile.module.css";

const fullName = "Шляпкин Максим Владимирович";
const lessons = "Математика, Русский язык, Информатика";
const dataOfBirth = "12 ноября 1998г";
const about = "В центре сюжета — 27-летний Илья Горюнов, который все время пребывания в тюрьме грезил о том, как встретится лицом к лицу с человеком, из-за которого оказался за решеткой – молодым офицером ФСКН Петром Хазиным (Иван Янковский). Илья надеялся, что дома его ждут мама, девушка и лучший друг, однако, когда он выходит на свободу, выясняется, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней невозможно. Во время долгожданной встречи с Петром Илья совершает необдуманный поступок и получает доступ к смартфону своего врага, а по сути – к его жизни: его фотографиям и видео, переписке с родителями и девушкой Ниной (Кристина Асмус), к странным, полным недомолвок и угроз переговорам с коллегами. На время Илья становится для всех Петром — через текст на экране телефона. Подробнее на https://www.kinoafisha.info/movies/8355754/";

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.prof_about}>
                <div className={style.prof_about_img}>
                    <img alt={"avatar"} src={"https://sev-sianie.ru/storage/app/media/placeholder_avatar.jpg"}/>
                </div>
                <div className={style.prof_about_info}>
                    <div className={style.block_about}>
                        <div className={style.info_full_name}>{fullName}</div>
                        <div className={style.info_date_of_birth}>Дата рождения: <i>{dataOfBirth}</i></div>
                    </div>
                    <div className={style.about_my_lessons}>Владение предметом: <i>{lessons}</i></div>
                    <div className={style.about_me}>Информация:
                        <div>
                            <i>{about}</i>
                        </div>
                    </div>
                </div>
                <div className={style.edit_profile}>
                    <button>Редактировать</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;