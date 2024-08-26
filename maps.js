const button=document.querySelector("#button")
const answer=document.querySelector(".answer")

function success(position){
    answer.innerHTML=`{position}`;
}
function fail(error){
      console.log(error)
}
button.addEventListener("click", async()=>{
    navigator.geolocation.getCurrentPosition(success(position),fail(error))
})
