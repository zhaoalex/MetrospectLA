var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'https://search-metrospectla-rjkhebfrl7ypcfdowm2opcmixa.us-east-1.es.amazonaws.com'
  ]
});


const getArticle = async (req, res) => {
	try {
		const document = await client.get({
		id: req.params.query 
		});
	return document; 
	} catch(err){
		return client.NotFoundError; 
	}
}


const searchRouter = require('express').Router();
searchRouter.get('/:get_article', getArticle);
module.exports = searchRouter;