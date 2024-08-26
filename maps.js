const button=document.querySelector("#button")
const answer=document.querySelector(".answer")

function success(position){
    answer.innerHTML=`{position}`;
}
function fail(position){
      answer.innerHTML=`{position}`;
}
button.addEventListener("click", async()=>{
    navigator.geolocation.getCurrentPosition(success,fail)
})
