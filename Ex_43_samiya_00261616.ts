//Exercise 43
//Exercise 43
let Magicians= ["Alice","Jimenn","Jungkook","Tim"];
console.log(Magicians);  //Print simple array form
function make_great() {
    let arraycopy=Magicians.slice()
    console.log("Copy of array is generated");
    console.log(arraycopy)
    console.log("\n<< modified messaage with ,the Great >>\n")
     console.log(arraycopy[0]+" the Great!",arraycopy[1]+" the Great!",arraycopy[2]+" the Great!",arraycopy[3]+" the Great!")
}
    //make_great()

    function show_magicians() {
         console.log(make_great());
         }
     show_magicians()
    