//Exercise 31
let Username=["Admin","Samiya","Habiba","Ayesha","Sania"];
console.log(Username);
let r=0;
for(r=0;r<=4;r++){
console.log(Username[0].concat(":Hello Admin, would you like to see logs?"));
for(r=1;r<=4;r++){ 
       console.log(Username[r].concat(":Hello Dear, Thanks for logging in.."));
}
}

// To check, if an array is empty
if(Username==Username){
console.log(Object.keys(Username));   //returns enumerable array
}  
else(typeof console=="undefined");{
    //nothing to displsy
}

//Removing all users in list
let Empty_List=Username.splice(0,5)
console.log(Username+" List is empty");  //returned username list empty

//Printing message for new users to be added

console.log("We need to find some Users!!");