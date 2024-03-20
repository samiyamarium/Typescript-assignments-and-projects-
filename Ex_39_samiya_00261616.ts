//Exercise 39
function city_country(city?:string, country?:string) {
    if(city){
        console.log(`"${city},${country}"`);
    }
    else{
        console.log("Nothing to dispaly");
    }
}
city_country("Karachi","Pakistan")
city_country("Istanbul","Turkey")
city_country("Paris","France")