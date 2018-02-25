var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var position;

var getLocation = () => {
  navigator.geolocation.getCurrentPosition(success, error, options);
  var crd = position.coords;
  var lat = crd.latitude;
  var long = crd.longitude;
  return (lat+","+long);
}

var success = (pos) => {
  position = pos;
}

var error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

module.exports = {
  getLocation
};
