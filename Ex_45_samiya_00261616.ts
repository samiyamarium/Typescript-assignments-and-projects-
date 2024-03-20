//Exercise 45
function cars(maufacturer?:string,modelname?:number,arbarg?:string,color?:string,headlights?:string) {
    let car={
        Manufacturer:`${maufacturer}`,
        ModelName:`${modelname}`,
        ArbitraryArgument:`${arbarg}`,
        Color:`${color}`,
        Headlights:`${headlights}`

    }
    console.log(car)
}
cars("Honda",2023,"New","Black","Neon")
cars("Toyota",2007,"old","silver","white")
cars("KIA",2010,"Old","Yellow","Red")