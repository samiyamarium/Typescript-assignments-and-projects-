//Exercise 38
function describe_city(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    if (cities) {
        console.log("".concat(cities, " is in"), country);
    }
    else {
        console.log("Nothing to display");
    }
}
describe_city("Karachi"); //returns Karachi is in Pk
describe_city("Lahore"); //returns Lahore is in Pk
describe_city("Istanbul"); //returns Istanbul is in Pk
describe_city(); // returns empty
