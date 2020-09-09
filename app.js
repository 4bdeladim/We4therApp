window.addEventListener('load', () => {
    let city;
    let tempDescreption = document.querySelector('.tempdescreption');
    let temp = document.querySelector('.temp');
    let fer = (temp * 9/5) + 32 ;
    let kal = temp +  273.15  ;
    let timezone = document.querySelector('.timezone');
    const cels = ' °C' ;
    const date = new Date();
    const time = date.getHours() ;
    var unit = "cels"
        city = prompt('Enter a city name(Nulles by default)');
        const proxy = `https://cors-anywhere.herokuapp.com/` ; 
        const api = `${proxy}http://api.weatherapi.com/v1/current.json?key=2ef629615f1741f684a180544200809&q=${city} ` 
        fetch(api) 
      .then(response => {
        return response.json();
      })
      .then(data =>{
        const {temp_c, temp_f} = data.current ;
        const {text} = data.current.condition ;
        const {country, name} = data.location ;
        //Set dom element
        temp.textContent = temp_c + cels ;
        tempDescreption.textContent = text ; 
        timezone.textContent = country + ', ' + name ;
        const icon = document.querySelector('i')
        if(text === 'Clear') {
            icon.classList = "fal fa-moon-stars" ; 
        }
        if(text == 'Partly cloudy') {
            if (time > 19) {
                icon.classList = "fal fa-clouds-moon" ;
            } else {
                icon.classList = "fal fa-clouds-sun" ;
            }
            
        }
        if(text == 'Moderate or heavy rain shower' ) {
            if (time > 19) {
                icon.classList = "fal fa-cloud-moon-rain"
            } else {
                icon.classList = "fal fa-cloud-sun-rain"
            } 
        }
        if(text === 'Sunny') {
            icon.classList = "fal fa-sun" ; 
        }
        if(text === 'Mist') {
            icon.classList = "fal fa-fog" ; 
        }
        if(text === 'Few clouds') {
            icon.classList = "fal fa-clouds" ; 
        }
        if(text === 'Rain ') {
            if(time > 19 ) {
                icon.classList = "fal fa-cloud-moon-rain" ;
            } else {
                icon.classList = "fal fa-cloud-sun-rain" ;
            }   
        }
        if(text === 'Snow') {
            icon.classList = "fal fa-snowflakes" ; 
        }
        if (text === 'Shower rain') {
            icon.classList = "fal fa-cloud-rain" ;
        }
        
        if (text === 'Thunderstorm ') {
            icon.classList = "fal fa-thunderstorm" ;
        } 
        if(text === 'Light rain') {
            if(time > 19 ) {
                icon.classList = "fal fa-cloud-moon-rain" ;
            } else {
                icon.classList = "fal fa-cloud-sun-rain" ;
            }   
        }


        //I think its the easy way to do the converting :)
        var clickCount = 0 ;
        temp.addEventListener('click',convert);
        function convert() {
            clickCount++ ;
            //Add the % because we want the clicks to be infinite :)
            if (clickCount % 2 !== 0) {
                temp.textContent = temp_f + ' °F' ;
            }
            if(clickCount % 2 == 0) {
                temp.textContent = temp_c + cels ;
            }
        }
  })
})




