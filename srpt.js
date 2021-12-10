function weather1( delhiw ) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=1271951&appid=cefd7cb4b88d604ffd9fcd532e3d7245')  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
      drawWeather(data);
      console.log(data);
    })
    .catch(function() {
    });
  }
  
  window.onload = function() {
    weather1( 1271951 );
  }

  function drawWeather( d ) {
    var celsius = Math.round(parseFloat(d.main.temp)-273.15);
    
    document.getElementById('temprature').innerHTML = celsius;
    document.getElementById('humidity').innerHTML = d.main.humidity;
    document.getElementById('feelslike').innerHTML = d.main.feels_like;
    document.getElementById('pressure').innerHTML = d.main.pressure;
    document.getElementById('visibility').innerHTML = d.visibility;
    document.getElementById('clouds').innerHTML = d.clouds.all; 
  }