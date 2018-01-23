const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const controller = require('./Controllers/controller')
const massive = require('massive')
require('dotenv').config()

const createInitialSession = require( `${__dirname}/middlewares/session.js` );

const app = express();

massive(process.env.CONNECTION_STRING).then( db => {
 app.set('db', db)
})

massive(process.env.CONNECTION_STRING).then(dbInstance => {
 app.set('db', dbInstance);
});

app.use( bodyParser.json() );
app.use( express.static( `${__dirname}../build` ) );
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 10000 }
}));

app.use( ( req, res, next ) => createInitialSession( req, res, next ) );

app.get('/api/items', controller.getPlanes)
app.post('/api/items', controller.addPlane)
app.get('/api/vinyl', controller.getVinyl)
app.post('/api/vinyl', controller.addVinyl)
app.delete('/api/items/:id', controller.erase)

const port = process.env.PORT || 3001
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );