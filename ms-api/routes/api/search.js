var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'https://search-metrospectla-rjkhebfrl7ypcfdowm2opcmixa.us-east-1.es.amazonaws.com'
  ]
});

const getSearchResults = (req, res) => {
  client.search({
    index: 'articles',
    type: 'article',
    body: {
      query: {
        match: {
          content1: req.params.query
        }
      }
    }
  }).then(data => {
    res.json({ results: data.hits.hits }); // array of search results
  }, err => {
    console.log(err.message);
    return res.json(err.message);
  });
}

const searchRouter = require('express').Router();
searchRouter.get('/:query', getSearchResults);
module.exports = searchRouter;
