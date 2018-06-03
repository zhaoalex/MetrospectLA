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
      _source: {
        include: ["title", "keywords", "short_description", "category", "image"],
        exclude: ["summary", "neighborhood", "content1", "content2", "image2", "image3", "image4", "directions"]
      }
      query: {
        match: {
          content: req.params.query
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
