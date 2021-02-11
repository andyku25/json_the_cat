const { fetchBreedDescription } = require("./breedFetcher");

const getArg = () => {
  const arg = process.argv.slice(2);
  if (arg.length !== 1) {
    console.log("Please enter 1 Cat Breed CLI argument");
    process.exit(1);
  }
  return arg;
};

const breedName = getArg();

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error! ", error);
  } else {
    console.log(description);
  }
})