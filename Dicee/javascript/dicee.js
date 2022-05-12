var randomVariable1 = Math.floor(Math.random()*6+1);
var randomVariable2 = Math.floor(Math.random()*6+1);

var imgName1 = "dice"+randomVariable1;
var imgName2 = "dice"+randomVariable2;

document.querySelector(".img1").setAttribute("src","images/"+imgName1+".png");
document.querySelector(".img2").setAttribute("src","images/"+imgName2+".png");



if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML = "<i class='fa-solid fa-flag'></i> "+"Player One Wins!";
}else if(randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML = "Player Two Wins! "+"<i class='fa-solid fa-flag'></i>";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}

