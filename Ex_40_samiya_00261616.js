//Exercise 40
function make_album(Artist, title, Number) {
    var directory = {
        Artistname: "".concat(Artist),
        AlbumTitle: "".concat(title),
        Numberoftracks: "".concat(Number)
    };
    console.log(directory);
}
make_album("Elvis", "Elvis in concert", 12);
make_album("Elvis", "Elvis christmas album", 10);
make_album("Elvis", "Elvis is back", 8);
