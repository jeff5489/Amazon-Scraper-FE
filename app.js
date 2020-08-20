console.log('app.js is working')

function getCraigslistFreeStuff(){
    fetch('https://arcane-cliffs-49545.herokuapp.com/')
     .then(function(response) {
       return response.text();
     })
     .then(function(text) {
       console.log(text);
     });
   };

getCraigslistFreeStuff()