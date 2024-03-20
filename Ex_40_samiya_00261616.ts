//Exercise 40
function make_album(Artist?:string,title?:string,Number?:number) {
    let directory={
    Artistname:`${Artist}`,
    AlbumTitle:`${title}`,
    Numberoftracks:`${Number}`
    }
    console.log(directory)
}
make_album("Elvis","Elvis in concert",12)
make_album("Elvis","Elvis christmas album",10)
make_album("Elvis","Elvis is back",8)

