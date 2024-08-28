
    // setting latitude and longitude of place
    let destinationlatitude = 26.561236769422337
    let destinationlongitude = 88.08703710230431
    let zoomlevel = 10
    var usermarker;

    //map initialization
    var map = L.map('map').setView([destinationlatitude, destinationlongitude], zoomlevel);
    //for open street map tile layer
    // var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // })
    //adding the osm to map variable
    //osm.addTo(map);

    //for google satellite tile 
    //for street lyrs=m, satellite=s, terrain=p and hybrid=h
    googleSat = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleSat.addTo(map);



    //for markers coloring and whatever
    var userIcon = L.icon({
        iconUrl: 'usermarker.png',
        iconSize: [38, 50]
        
    });
    var destinationIcon = L.icon({
        iconUrl: 'destinationmarker.webp',
        iconSize: [38, 95],
    });
    
    
    //for marking the latitude and longitude and check input
    const inputchecker=setInterval(()=>{
    if(userlatitude!=null){
    usermarker=L.marker([userlatitude,userlongitude], {icon: userIcon})
    usermarker.addTo(map);


    //for drawing line from user to destination    
    //  var latlngs = [
    //     [userlatitude,userlongitude],
    //     [destinationlatitude,destinationlongitude]
    // ];    
    // var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
    
    // zoom the map to the polyline
    // map.fitBounds(polyline.getBounds());

    //To get the route
    getRoute(usermarker,destinationmarker);

    clearInterval(inputchecker);
    }
    
    },1000)
    var destinationmarker=L.marker([destinationlatitude,destinationlongitude],{icon:destinationIcon})
    destinationmarker.addTo(map);


   

