//*REQUIRE
const { render } = require('ejs');
const express = require('express');
const {QuotesRouter} = require( './server/routes/quotesRouter' );

//*DATABASE
require( './server/config/database' );

//*APP
const app = express();
app.set( 'views', __dirname + '/client/views' );
app.set( 'view engine', 'ejs' );
app.use( express.urlencoded({extended:true}) );
//----------------------------------------------------------
app.use( '/quotes', QuotesRouter );

//*PORT
app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});