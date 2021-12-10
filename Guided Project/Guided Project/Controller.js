
function addRecord(){
    var book = new Book();
    for (let key in book){
        console.log("Hello");
        book[key]=document.querySelector("#"+key).value;
    }
    console.log(book);
    bookOperations.add(book);
    printbooks();
}
function printbooks(){
    console.log(bookOperations.books);
}