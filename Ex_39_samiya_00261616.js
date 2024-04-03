//Exercise 39
function city_country(city, country) {
    if (city) {
        console.log("\"".concat(city, ",").concat(country, "\""));
    }
    else {
        console.log("Nothing to dispaly");
    }
}
city_country("Karachi", "Pakistan");
city_country("Istanbul", "Turkey");
city_country("Paris", "France");
