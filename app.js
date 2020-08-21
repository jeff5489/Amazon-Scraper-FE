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

// put craigslist scraper in express route
// return scraped data
// present data in decent way on front end

// put amazon scraper in express route
// make it intake a search string
// send search string from FE
// add search string value to html input element
// return scraped data
// present data in decent way on front end