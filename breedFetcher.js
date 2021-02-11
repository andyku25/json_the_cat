const request = require("request");

const getArg = () => {
  const arg = process.argv.slice(2);
  if (arg.length !== 1) {
    console.log("Please only enter 1 Cat Breed CLI argument");
    process.exit(1);
  }
  return arg;
};

const breedSearch = getArg();

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const catDetails = JSON.parse(body);
    if (catDetails.length === 0) {
      console.log("Breed entered cannot be found. Please review the CLI argument");
      process.exit(1);
    }
    const breedDetails = catDetails[0].description;
    console.log(breedDetails);
    console.log(typeof breedDetails);
  }
});
