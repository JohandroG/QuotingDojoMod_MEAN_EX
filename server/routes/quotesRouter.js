const express = require( 'express' );
const QuotesRouter = express.Router();
const {QuotesController} = require( './../controllers/QuotesController' );

QuotesRouter.route('/').get(QuotesController.loadindex)

QuotesRouter.route('/quotes').get(QuotesController.showquotes).post(QuotesController.postquote)


module.exports = { QuotesRouter };

