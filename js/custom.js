function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulboff")) {
        image.src = "./img/pic_bulbon.gif";
    } else {
        image.src = "./img/pic_bulboff.gif";
    }
    console.log("hello TWO");
}
console.log("hello ONE");


