'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App{
    #map;
    #mapEvent;
constructor(){
    this._getPosition();
    form.addEventListener('submit',this._newWorkou.bind(this))
    //once we submit a form a location tag appears on the map
    //toggling between cadence and elevation field in the form  
    inputType.addEventListener('change',this._toggleElevationField)
}

_getPosition(){

//Geolocation API
//Get current position
navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
//error callback
 function(){
alert('Could not find your position')
})

    }
 _loadMap(position){
       //success callback
 
        //use destructuring to get latitude&longitude from coords object
        const {latitude}=position.coords;
        const {longitude}=position.coords;
        
        /////////create a map in the 'map' div, add tiles of our choice, and then add a marker with some text in a popup////////////
        const coords=[latitude,longitude]
        
        //first argument of setview is our current coordination and the second is zoom number
        //'map' is html element id
        this.#map = L.map('map').setView(coords, 13);
        //open street map is an open source map for free. you can change its style
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        
        //Adding event to the map object
        this.#map.on('click',this._showForm.bind(this))
           
        
        
        
        
        
            
    }
_showForm(mapE){
    this.#mapEvent=mapE
    //when we click a form appears
    //form is hidden by default so we need to remove its hidden class
    form.classList.remove('hidden');
}
_toggleElevationField(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
}
 _newWorkout(e){
        e.preventDefault();
        inputCadence.value=inputDistance.value=inputElevation.value=inputDuration.value='';

        //Clear input fields 

        //display marker

        // Adding lat and lng of the clicked location to the map
        const {lat , lng}=this.#mapEvent.latlng
        L.marker([lat,lng]).addTo(this.#map)
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



}
    

}

const app=new App();
// adding submit eventListener



