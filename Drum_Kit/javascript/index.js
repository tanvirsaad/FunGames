var buttons = document.querySelectorAll(".drum");
var drums = ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"];
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function (){
        var key = this.innerHTML;
        checkKey(key);
        showAnimation(key);
    });
}
document.addEventListener("keypress",function(event){
    checkKey(event.key);
    showAnimation(event.key);
})
function checkKey(x){
    if(x=="w")
        playSound("tom-1");
    if(x=="a")
        playSound("tom-2");
    if(x=="s")
        playSound("tom-3");
    if(x=="d")
        playSound("tom-4");
    if(x=="j")
        playSound("snare");
    if(x=="k")
        playSound("crash");
    if(x=="l")
        playSound("kick-bass");
}
function playSound(drumName){
    path = "sounds/"+drumName+".mp3";
     var audio = new Audio(path);
     audio.play();
}
function showAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}


