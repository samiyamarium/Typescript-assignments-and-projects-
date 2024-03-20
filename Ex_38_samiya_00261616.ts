//Exercise 38
function describe_city(cities?:string,country="Pakistan") {
    if(cities){
        console.log(`${cities} is in`,country);
    }
    else{
        console.log ("Nothing to display");
    }
}

describe_city("Karachi")  //returns Karachi is in Pk
describe_city("Lahore")   //returns Lahore is in Pk
describe_city("Istanbul") //returns Istanbul is in Pk
describe_city() // returns empty