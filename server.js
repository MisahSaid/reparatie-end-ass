// Importeer het npm pakket express uit de node_modules map
import express, { response } from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Stel het basis endpoint in
const apiUrl = 'https://fdnd-agency.directus.app/items/misah_goals'

// Haal alle squads uit de WHOIS API op
// const squadData = await fetchJson(apiUrl + '/squad')

// Maak een nieuwe express app aan
const app = express()

// zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

let theme = "dark" 

// TODO: routes voor deze pizza applicatie.. GET
app.get('/', function(request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/misah_goals')
    .then((goalsDataUitDeAPI) => {
      response.render('home', {
        goals: goalsDataUitDeAPI.data
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      response.status(500).send('Error fetching data');
    });
});



app.get('/allgoals', function(request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/misah_goals')
    .then((goalsDataUitDeAPI) => {
      response.render('allgoals', {goals: goalsDataUitDeAPI.data});
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      response.status(500).send('Error fetching data');
    });
});

app.get('/goal', function(request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/misah_goals')
    .then((goalsDataUitDeAPI) => {
      response.render('goal', {goals: goalsDataUitDeAPI.data});
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      response.status(500).send('Error fetching data');
    });
});

app.get('/newgoal', function(request, response) {
  fetchJson(apiUrl)
    .then((goalsDataUitDeAPI) => {
      response.render('newgoal', { goals: goalsDataUitDeAPI.data });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      response.status(500).send('Error fetching data');
    });
});


app.get('/form', function(request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/misah_goals')
    .then((goalsDataUitDeAPI) => {
      response.render('form', {goals: goalsDataUitDeAPI.data});
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      response.status(500).send('Error fetching data');
    });
});



app.post('/newgoal', function (request, response) {
  const newGoal = {
    title: request.body.title
  };

  // Send POST request to API to save the new goal
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newGoal)
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
    // Redirect to the page showing goals after saving the new goal
    response.redirect('/newgoal'); 
  })
  .catch(error => {
    console.error('Error:', error);
    // Render an error page or send a meaningful response
    response.status(500).send('Error saving goal');
  });
});




// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})



