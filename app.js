// function initMap(){
//     var options ={
//         zoom:3,
//         center:{lat:3.1466,lng:101.6958}
//     }
//     var map = new google.maps.Map(document.getElementById('map'),options)
//     var markers = [
//         {
//             coords: {lat:3.1466,lng:101.6958},
//             content: '<h1>Malaysia<h1/>'
//         },
//         {
//             coords: {lat:1.3521,lng:103.8198},
//             content: '<h1>Singapore<h1/>'
//         },
//         {
//             coords: {lat:15.8700,lng:100.9925},
//             content: '<h1>Thailand<h1/>'
//         }
//     ]
//     for(var i=0;i<markers.length; i++){
//         addMarker(markers[i])
//     }
//     function addMarker(props){
//         var marker = new google.maps.Map({
//             position:props.coords,
//             map:map,
//         })
//         if(props.content){
//             var infoWindow = new google.maps.infoWindow({
//                 content:props.content
//             })
//             marker.addListener('click', function(){
//                 infoWindow.open(map, marker)
//             })
//         }
//     }
// }

function initMap(){
    var options = {
        zoom:8,
        center:{lat:20.5937,lng:78.9629}
    }
    
    var map = new google.maps.Map(document.getElementById('map'),options)
    var markers = [
        {
            coords: {lat: 35.8617, lng: 104.1954},
            content: '<h1>China</h1>'
        },
        {
        coords: {lat: 36.2048, lng: 138.2529},
        content: '<h1>Japan</h1>'
        },
        {
        coords: {lat: 35.9078, lng: 127.7669},
        content: '<h1>South Korea</h1>'
        }
    ]
    
    for(var i=0; i<markers.length;i++){
        addMarker(markers[i])
    }
    
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        })
    
        if(props.content){
            var infowindow = new google.maps.InfoWindow({
            content:props.content
        })
    
        marker.addListener('click',function(){
            infowindow.open(map,marker)
        })
    }
}
}