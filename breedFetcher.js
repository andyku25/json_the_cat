const request = require("request");



const fetchBreedDescription = (breedName, cb) => {
  // Request the description
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      cb("Breed entered cannot be found. Please review the CLI argument", null);
    } else {
      const catDetails = JSON.parse(body);
      // CHECK IF CAT BREED EXISTS
      if (catDetails[0]) {
        // process.exit(1);
        const breedDetails = catDetails[0].description;
        cb(null, breedDetails);
      } else {
        cb("Breed entered cannot be found. Please review the CLI argument");
      }
    }
  });
};

module.exports = { fetchBreedDescription };