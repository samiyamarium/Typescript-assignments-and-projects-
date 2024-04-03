//Exercise 45
function cars(maufacturer, modelname, arbarg, color, headlights) {
    var car = {
        Manufacturer: "".concat(maufacturer),
        ModelName: "".concat(modelname),
        ArbitraryArgument: "".concat(arbarg),
        Color: "".concat(color),
        Headlights: "".concat(headlights)
    };
    console.log(car);
}
cars("Honda", 2023, "New", "Black", "Neon");
cars("Toyota", 2007, "old", "silver", "white");
cars("KIA", 2010, "Old", "Yellow", "Red");
