let guests=["Aunty","Uncle","GrandFather"];
let message=["! Don't forget to bring my presents.","! I am making dessert for you.","! I wish you could be here with us!!"];
console.log(guests[0]+message[0]);
console.log(guests[1]+message[1]);
console.log(guests[2]+message[2]);
console.log(guests.splice(2,1));  //removing guest
console.log(guests);
let cousin="Cousin"
guests.push(cousin)    //adding cousin as replacement
console.log(guests);
console.log(guests[0]+message[0]);
console.log(guests[1]+message[1]);
console.log(guests[2]+message[2]);

//Exercise 16

console.log(guests);
let Niece="Niece"
guests.unshift(Niece);
console.log(guests);
let Nephew="Nephew"
guests.splice(2,0,"Nephew")
console.log(guests); 
let Son="Son";
guests.push(Son)
console.log(guests);
let messag=["! Iam waiting for you..","! You are my Rosebud!!","! Come asap."]
console.log(messag);
console.log(guests[0]+messag[1])
console.log(guests[1]+message[0])
console.log(guests[2]+messag[0])
console.log(guests[3]+message[1])
console.log(guests[4]+message[2])
console.log(guests[5]+messag[2])
console.log("Number of guests= "+ (guests.length))  