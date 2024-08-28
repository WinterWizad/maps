
function getRoute(){

    //creating a marker for movement animation on route
    var movingIcon=L.icon({
        iconUrl: 'movingIcon.png',
        iconSize: [10, 10],
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
            
        pointmarker.setLatLng([coord.lat, coord.lng])
        },100*index)
        
    });
  })
  route.addTo(map);
}