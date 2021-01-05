const url = "http://localhost:8080/";
const subject = "subject";

const headerAuthorization = {
    "Content-Type":"application/json",
    "Authorization":"bearer " + window.localStorage.getItem("AuthorizationToken"),
};

const headersNotAuthorization = {
    "Content-Type":"text/html",
};

export async function apiGetAllSubject() {
    let response = await fetch(url + subject + "/all", {
        method: 'GET',
        headers: headersNotAuthorization,
    });
    return await response.json();
}

function statusAccess(statusCode) {

}