let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc=== 'images/playground.png') {
        myImage.setAttribute('src', 'images/playground2.png');
    } else {
        myImage.setAttribute('src', 'images/playground.png');
    }
}