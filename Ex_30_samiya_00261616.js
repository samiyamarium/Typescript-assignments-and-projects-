//Exercise 30
var Username = ["Admin", "Samiya", "Habiba", "Ayesha", "Sania"];
console.log(Username);
var r = 0;
for (r = 0; r <= 4; r++) {
    console.log(Username[0].concat(":Hello Admin, would you like to see logs?"));
    for (r = 1; r <= 4; r++) {
        console.log(Username[r].concat(":Hello Dear, Thanks for logging in.."));
    }
}
