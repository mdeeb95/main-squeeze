require('dotenv').config();

const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, massive = require('massive')
, controller = require('./Controllers/controller');

const app = express();

const path = require('path');

app.use(express.static(__dirname + '/../build'))

massive(process.env.CONNECTION_STRING).then( db => {
 app.set('db', db)
})

massive(process.env.CONNECTION_STRING).then(dbInstance => {
 app.set('db', dbInstance);
});

app.use(express.static(__dirname + '/build'))

app.use( bodyParser.json() );
app.use( cors() );


app.get('/api/items', controller.getPlanes)
app.post('/api/items', controller.addPlane)
app.get('/api/vinyl', controller.getVinyl)
app.post('/api/vinyl', controller.addVinyl)
app.delete('/api/vinyl/:id', controller.eraseShirts)
app.put('/api/vinyl/', controller.editShirts)
app.get('/api/jewelry', controller.getJewelry)
app.post('/api/jewelry', controller.addJewelry)
app.put('/api/jewelry', controller.editJewelry)
app.delete('/api/jewelry/:id', controller.deleteJewelry)
app.get('/api/patches', controller.getPatches)
app.post('/api/patches', controller.addPatches)
app.put('/api/patches', controller.editPatches)
app.delete('/api/patches/:id', controller.deletePatches)
app.get('/api/featureditem1', controller.getFeaturedItem1)
app.put('/api/featureditem1', controller.editFeaturedItem1)
app.get('/api/socials', controller.getSocials)
app.get('/api/posters', controller.getPosters)
app.post('/api/posters', controller.addPosters)
app.put('/api/posters', controller.editPosters)
app.delete('/api/posters/:id', controller.deletePosters)

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = process.env.PORT || 80
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );