var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

var position;

function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error, options);
    var crd = position.coords;
    var lat = crd.latitude;
    var long = crd.longitude;
    return [lat, long];
}

function success(pos) {
    position = pos;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


