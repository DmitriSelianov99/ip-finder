import L from "leaflet";

export  function addTileLayer(map){
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG1pdHJpcjNyIiwiYSI6ImNreTdoZWZ0ejEyZHEydnFjdXJrMHc4cHkifQ.r6Q1TCts4ETLIvRBLKB8Gw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
}