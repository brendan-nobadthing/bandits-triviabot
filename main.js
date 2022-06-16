const SerpApi = require('google-search-results-nodejs'); // npm package for serpApi
const Fuse = require('fuse.js') // npm package for fuzzy matching

// setup serpApi
const search = new SerpApi.GoogleSearch("062dce0330556c852218af3807dd0b61ad6ba2115b9f868bf7b9678434e3d330");

// QUERY Google using SerpApi
var questionString = "A thousand paper what?"

fetchSearchResults = () => {

  const params = {
    q: questionString,
    hl: "en",
    gl: "us"
  };
  
  const callback = function(data) {
    console.log(data);
    //fuzzyMatch(questionString,data)
  };
  
  // Show result as JSON
  search.json(params, callback);
}

fuzzyMatch = (questionString,searchResults) => {
  const fuse = new Fuse(searchResults, {keys: []})

  const result = fuse.search(questionString);
  console.log(result)
}

fetchSearchResults();