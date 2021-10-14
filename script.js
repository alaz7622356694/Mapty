'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


//Geolocation API
//Get current position
navigator.geolocation.getCurrentPosition(
    //success callback
    function(position){
//use destructuring to get latitude&longitude from coords object
const {latitude}=position.coords;
const {longitude}=position.coords;

/////////create a map in the 'map' div, add tiles of our choice, and then add a marker with some text in a popup////////////
const coords=[latitude,longitude]

//first argument of setview is our current coordination and the second is zoom number
//'map' is html element id
const map = L.map('map').setView(coords, 13);
//open street map is an open source map for free. you can change its style
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//Adding event to the map object
map.on('click',function(mapEvent){
    const {lat , lng}=mapEvent.latlng
    L.marker([lat,lng]).addTo(map)
    //get popup options from leaflet documentation :https://leafletjs.com/reference-0.7.7.html#popup 

    .bindPopup(L.popup({
        maxWidth:250,
        minWidth:100,
        autoClose:false,
        closeOnClick:false,
        className:'running-popup',
       
    }))
    .setPopupContent('Workout')
    .openPopup();
})


    },
    


    //error callback
    function(){
    alert('Could not find your position')
})