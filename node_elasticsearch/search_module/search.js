var elasticsearch = require('elasticsearch');

var client = elasticsearch.Client({
  hosts: [
    'https://search-metrospectla-rjkhebfrl7ypcfdowm2opcmixa.us-east-1.es.amazonaws.com'
  ]
});

module.exports.search = function(searchData, callback) {
  client.search({
    index: 'articles',
    type: 'article',
    body: {
      query: {
        match: {
          "content": searchData.searchTerm
        }
      }
    }
  }).then(function (resp) { //make endpoint GET /api/[query] 
    // logs full json
    console.log(resp);
    console.log(resp.hits.hits); 
    callback(resp.hits.hits);//returns array of search results 
  }, function (err) {
      callback(err.message)
      console.log(err.message);
  });
}
