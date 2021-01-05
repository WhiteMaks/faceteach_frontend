const CHANGE_ABOUT = "CHANGE_ABOUT";
const SAVE_ABOUT = "SAVE_ABOUT";

export const changeAbout = (about) => {
    return {type: CHANGE_ABOUT, about: about};
}

export const saveAbout = () => {
    return {type: SAVE_ABOUT}
}

let initialState = {
    data: {
        id: 0,
        firstName: "Максим",
        secondName: "Шляпкин",
        middleName: "Владимирович",
        level: 0,
        country: "Россия",
        lessons:["Математика", "Русский язык", "Информатика"],
        dataOfBirth: "12 ноября 1998г",
        about:"В центре сюжета — 27-летний Илья Горюнов, который все время пребывания в тюрьме грезил о том, как встретится лицом к лицу с человеком, из-за которого оказался за решеткой – молодым офицером ФСКН Петром Хазиным (Иван Янковский). Илья надеялся, что дома его ждут мама, девушка и лучший друг, однако, когда он выходит на свободу, выясняется, что прежняя жизнь, по которой он тосковал, разрушена, и вернуться к ней невозможно. Во время долгожданной встречи с Петром Илья совершает необдуманный поступок и получает доступ к смартфону своего врага, а по сути – к его жизни: его фотографиям и видео, переписке с родителями и девушкой Ниной (Кристина Асмус), к странным, полным недомолвок и угроз переговорам с коллегами. На время Илья становится для всех Петром — через текст на экране телефона. Подробнее на https://www.kinoafisha.info/movies/8355754/",
        urlImg: "https://sev-sianie.ru/storage/app/media/placeholder_avatar.jpg",
        newData: {
            firstName: "",
            secondName: "",
            middleName: "",
            lessons:["Математика", "Русский язык", "Информатика"],
            dataOfBirth: "12 ноября 1998г",
            about: "",
            urlImg: "",
        }
    }
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case CHANGE_ABOUT: {
            stateCopy.data = {...state.data}
            stateCopy.data.newData.about = action.about;
            break;
        }
        case SAVE_ABOUT: {
            stateCopy.data = {...state.data}
            if (state.data.newData.about !== "") {
                stateCopy.data.about = state.data.newData.about;
            }
            stateCopy.data.newData.about = "";
            break;
        }
    }
    return stateCopy;
}

export default profileReducer;