//Exercise 24
// #compare strings
var a = "A";
var b = "B";
console.log("is string a==b? then false");
console.log(a == b);
console.log("is string a!==b? then true");
console.log(a !== b);
//#lowercase functions
console.log(a.toLowerCase());
console.log("is 'a' not a lower case? print false");
console.log(a == "a");
console.log("is 'a' lower case? print true");
console.log(a !== "a");
// #Arithmetic comparison
var five = 5;
var six = 6;
console.log("is number five==six? then false");
console.log(five == six);
console.log("is number five!==six? then true");
console.log(five !== six);
console.log("is number five>six? then false");
console.log(five > six);
console.log("is number five<six? then true");
console.log(five < six);
console.log("is number five>=six? then false");
console.log(five >= six);
console.log("is number five<=six? then true");
console.log(five <= six);
// # logic comparison
var c = 1;
var d = 0;
console.log("and operator , Performing operation on 0 and 1");
console.log(c && d);
console.log("or operator, Performing operation on 0 and 1");
console.log(c || d);
console.log("and operator , Performing comparison");
console.log(c < five && d > five);
console.log("or operator  , Performing comparison");
console.log(c < five || d > five);
//#test, an item in array
var items = ["spoon", "fork", "knife"];
console.log("Is spoon in items list,print true");
console.log(items[0] == "spoon");
//#test, an item not in array
//let items=["spoon","fork","knife"]
console.log("Is plate is not in items list,print false");
console.log(items[0 || 1 || 2] == "plate");
