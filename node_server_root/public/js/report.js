var reportCrime = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/api/reportcrime", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
};

var recordTrash = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/api/recordtrash", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

var recordBathroom = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/api/recordbathroom", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}