const { dbConnection } = require('./config/mongo.config');
const { route } = require('./routes/auth.routes');

const authRouter = require( './routes/auth.routes' );
const productosRouter = require( './routes/products.routes' );
const frutasRouter = require('./routes/frutas.routes');
const tiendaRoutes = require('./routes/tienda.routes');
const inventarioRoutes = require('./routes/inventario.routes');




require( 'dotenv' ).config();

const 
    express = require( 'express'  ),
    app = express(),
    cors = require( 'cors' ),
    PORT = process.env.PORT || 4000;

// console.log( process.env );

/** Middleware de Express */
app.use( express.static( 'public') );   // Directorio público
app.use( cors() );              // Cross-Origin-Resources-Sharing
app.use( express.json() );      // Lectura Parseo del body

/** Define todas las rutas */
app.use( '/api/auth', authRouter );
app.use( '/api/products', productosRouter);
app.use('/api/frutas', frutasRouter);
app.use('/api/tiendas', tiendaRoutes);
app.use('/api/inventario', inventarioRoutes);

dbConnection();                 // Invoca la inicializacion de la base de datos

app.listen( PORT, () => {
    console.log( `Servidor lanzado en http://localhost:${ PORT }` );
});