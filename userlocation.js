const button = document.querySelector("#button");
const answer = document.querySelector(".answer");
var userlatitude, userlongitude;

function success(position) {
    // console.log(position)
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    userlatitude=latitude;
    userlongitude=longitude;
    answer.innerHTML = `Your Latitude: ${latitude} <br> Your Longitude: ${longitude}`;
    
    
    //this timeout gets current position again and again to update the coordinates
    setTimeout(()=>{
        console.log("Updating location.....")
        navigator.geolocation.getCurrentPosition(success, fail);
    },3000)
}

function fail(error) {
    console.log(error);
    answer.innerHTML = `Error: ${error.message}`;
}

button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(success, fail);
});
