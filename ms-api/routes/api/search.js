var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'https://search-metrospectla-rjkhebfrl7ypcfdowm2opcmixa.us-east-1.es.amazonaws.com'
  ]
});

search = (searchData, callback) => {
  client.search({
    index: 'articles',
    type: 'article',
    body: {
      query: {
        match: {
          "content": searchData
        }
      }
    }
  }).then(resp => {
    callback(resp.hits.hits); // returns array of search results 
  }, err => {
      callback(err.message)
      console.log(err.message);
  });
}
 
const getSearchResults = (req, res) => {
  search(req.params.query, data => {
    res.json({ results: data });
  });
}

const searchRouter = require('express').Router();
searchRouter.get('/:query', getSearchResults);
module.exports = searchRouter;