
let guests=["Aunty","Uncle","GrandFather"];
let message=["! Don't forget to bring my presents.","! I am making dessert for you.","! I wish you could be here with us!!"];
console.log(guests[0]+message[0]);
console.log(guests[1]+message[1]);
console.log(guests[2]+message[2]);
console.log(guests.length);
console.log(guests.splice(2,1));  //removing guest
console.log(guests);
let cousin="Cousin"
guests.push(cousin)    //adding cousin as replacement
console.log(guests);
console.log(guests[0]+message[0]);
console.log(guests[1]+message[1]);
console.log(guests[2]+message[2]);
console.log("Number of Guests= "+ (guests.length));
