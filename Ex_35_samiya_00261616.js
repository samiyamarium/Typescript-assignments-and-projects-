//Exercise 35
var Animals = ["Tiger", "Lion", "Leopard"];
var w = 0;
for (w = 0; w <= 2; w++) {
    console.log(Animals[w]);
}
var Message = ["! This a beautiful but way too dangerous animal.\n", "! King of the Jungle,yet afraid of his wife!!\n", "! My Favoutite, Speed is super!!"];
for (w = 0; w <= 2; w++) {
    console.log(Animals[w].concat(Message[w]));
}
console.log("\nThese are wild Animals, yet they have a purpose..");
