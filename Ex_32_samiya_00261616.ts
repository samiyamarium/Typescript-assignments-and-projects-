//Exercise 32
let Current_Users=["Zohaib","Zia", "Bilal", "Shariq","Ayesha"];
console.log(Current_Users);
let New_Users=["Samiya","Bilal","Habiba","ZOHAIB","Ayesha"];
console.log(New_Users);
let l=0;
for(l=0;l<=4;){
    if(New_Users[0]==Current_Users[l]){
        console.log("Please Enter a new Name")
    }
    else{
        console.log("Username is available")
    }
    if(New_Users[1]==Current_Users[l]){
        console.log("Please Enter a new Name")
    }
    else{
        console.log("Username is available")
    }
    if(New_Users[2]==Current_Users[l]){
        console.log("Please Enter a new Name")
    }
    else{
        console.log("Username is available")
    }
    if(New_Users[3]==Current_Users[l]){
        console.log("Please Enter a new Name")
    }
    else{
        console.log("Username is available")
    }
    if(New_Users[4]==Current_Users[l]){
        console.log("Please Enter a new Name")
    }
    else{
        console.log("Username is available")
    }
    l++    
}
