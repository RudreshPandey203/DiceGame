var a = Math.ceil(Math.random() * 6);
var b = Math.ceil(Math.random() * 6);
var imgsrc = "images/dice"+a+".png";
var imgsrc2 = "images/dice"+b+".png";
document.querySelector(".img1").setAttribute("src",imgsrc);
document.querySelector(".img2").setAttribute("src",imgsrc2);
if(a>b){
    document.querySelector("h1").innerHTML="🚩Player 1 won!";
}
else if(a<b){
    document.querySelector("h1").innerHTML="Player 2 won!🚩";
}
else {
document.querySelector("h1").innerHTML="Draw";
}
