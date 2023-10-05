/*
    Assignment #4
    Megha panchani
*/

$(function () {
    // Check if geolocation has been allowed by the user
if ("geolocation" in navigator) {
   
    navigator.geolocation.getCurrentPosition(function (position) {
      
      const locationHere = document.getElementById("locationhere");
      locationHere.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}, Accuracy: ${position.coords.accuracy} meters`;
  
     
      const storedLocation = localStorage.getItem("userLocation");
  
      if (storedLocation) {
        
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.textContent = "Welcome back to the page!";
        document.body.appendChild(welcomeMessage);
  
        
        const storedLocationTag = document.createElement("p");
        storedLocationTag.textContent = `Stored Location: ${storedLocation}`;
        document.body.appendChild(storedLocationTag);
  
       
        const distance = calculateDistance(position.coords.latitude, position.coords.longitude, storedLocation);
        const distanceInKilometers = (distance / 1000).toFixed(2);
        const distanceTag = document.createElement("p");
        distanceTag.textContent = `You traveled ${distanceInKilometers} km since your last visit.`;
        document.body.appendChild(distanceTag);
      } else {
        
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.textContent = "Welcome to the page for the first time!";
        document.body.appendChild(welcomeMessage);
      }
  
   
      localStorage.setItem("userLocation", `${position.coords.latitude}, ${position.coords.longitude}`);
    });
  } else {
   
    const errorContainer = document.getElementById("container");
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Geolocation is blocked. Please allow geolocation to use the application.";
    errorContainer.appendChild(errorMessage);
  }
  

function calculateDistance(lat1, lon1, lat2, lon2) {
    const apiKey = 'njkQRqYMXOQJY2MwqMwHjoKdKuReMmfX'; 
    const url = `https://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${lat1},${lon1}&to=${lat2},${lon2}`;
  
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
       
        const distanceInMeters = data.route.distance * 1609.344; 
        const distanceInKilometers = (distanceInMeters / 1000).toFixed(2); 
        return distanceInKilometers;
      })
      .catch((error) => {
        console.error('Error calculating distance:', error);
        return null;
      });
  }
  
  
  calculateDistance(
    37.7749, // Latitude of location 1
    -122.4194, // Longitude of location 1
    34.0522, // Latitude of location 2
    -118.2437 // Longitude of location 2
  )
    .then((distance) => {
      if (distance !== null) {
        console.log(`Distance in kilometers: ${distance} km`);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


