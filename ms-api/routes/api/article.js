var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'https://search-metrospectla-rjkhebfrl7ypcfdowm2opcmixa.us-east-1.es.amazonaws.com'
  ]
});

const getArticle = (req, res) => {
	client.search({
    index: 'articles',
		type: 'article',
    body: {
      query: {
        match: {
          _id: req.params.id
        }
      }
    }
	}).then(data => res.json(data), err => {
		console.log(err.message)
		return res.json(err.message)
	})
}

const articleRouter = require('express').Router();
articleRouter.get('/:id', getArticle);
module.exports = articleRouter;
