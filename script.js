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
//use destructuring ot get latitude&longitude from coords object
const {latitude}=position.coords;
const {longitude}=position.coords;
    },
    
    //error callback
    function(){
    alert('Could not find your position')
})