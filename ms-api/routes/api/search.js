var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'https://search-metrospectla-rjkhebfrl7ypcfdowm2opcmixa.us-east-1.es.amazonaws.com'
  ]
});

const getSearchResults = (req, res) => {
  let reqBody = {
    index: 'articles',
    type: 'article',
    body: {
      _source: {
        include: ["title", "keywords", "short_description", "category", "thumbnail", "summary"],
      }
    }
  };

  if (req.params.query) {
    const additionalBody = {
      body: {
        ...reqBody.body,
        query: {
          fuzzy: {
            content1: req.params.query
          }
        }
      }
    }
    reqBody = Object.assign({}, reqBody, additionalBody);
  }

  client.search(reqBody).then(data => {
    res.json({ results: data.hits.hits }); // array of search results
  }, err => {
    console.log(err.message);
    return res.json(err.message);
  });
}

const getCategoryResults = (req, res) => {
  client.search({
    index: 'articles',
    type: 'article',
    body: {
      _source: {
        include: ["title", "keywords", "short_description", "category", "thumbnail", "summary"],
      },
      query: {
        match: {
          category: req.params.category
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
searchRouter.get('/category/:category', getCategoryResults);
searchRouter.get(['/:query', '/'], getSearchResults);
module.exports = searchRouter;
