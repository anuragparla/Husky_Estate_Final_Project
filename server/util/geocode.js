const fetch = require('node-fetch');


const getLatLng = async (address) => {

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env['GEOCODING_API']}`);

    let json = await response.json();
    console.log(json);

    if(json.status !== "OK") {
        return [];
    }
    else return json;


}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
function deg2rad(deg) {
    return deg * (Math.PI/180)
}


module.exports = {
    getLatLng,
    getDistanceFromLatLonInKm
}