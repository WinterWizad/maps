const button = document.querySelector("#button");
const answer = document.querySelector(".answer");

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    answer.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

function fail(error) {
    console.log(error);
    answer.innerHTML = `Error: ${error.message}`;
}

button.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(success, fail);
});
