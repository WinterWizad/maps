
function getRoute(){
    var movingIcon=L.icon({
        iconUrl: 'movingIcon.png',
        iconSize: [38, 95],
    });
    var pointmarker=L.marker([userlatitude,userlongitude], {icon: movingIcon}).addTo(map)
   var route= L.Routing.control({
    waypoints: [
      L.latLng(userlatitude, userlongitude),
      L.latLng(destinationlatitude, destinationlongitude)
    ],
    createMarker:function() {return null;}
  }).on('routesfound',function(e){
    // console.log(e)
    e.routes[0].coordinates.forEach(function(coord,index){
        setTimeout(()=>{
            console.log("hello")
            
        pointmarker.setLatLng([coord.lat, coord.lng])
        },1000*index)
        
    });
  })
  route.addTo(map);
}