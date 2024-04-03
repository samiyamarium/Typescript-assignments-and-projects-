//Exercise 37
function make_shirt(Message) {
    if (Message === void 0) { Message = "! I love TypeScript"; }
    var large = "Large";
    var medium = "Medium";
    var unknown = "Other sizes";
    if (large && medium) {
        console.log(large + Message, "\n", medium + Message);
    }
    else
        (unknown);
    {
        console.log(unknown + "! This is a free size.");
    }
    return (make_shirt);
}
make_shirt();
