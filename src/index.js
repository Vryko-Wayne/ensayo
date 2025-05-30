const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');


//arranque de la aplicacion

const app = express();


//configuracion de la aplicacion

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/handlebars'),
    extname: '.hbs'    
}));

app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

// public
app.use(express.static(path.join(__dirname, 'public')));
//iniciar el servidor

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});