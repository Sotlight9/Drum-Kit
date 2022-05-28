var obj = document.querySelectorAll(".drum");
var buttonNumber = obj.length;

for(var i=0;i<buttonNumber;i++){
  obj[i].addEventListener("click", function(){
  
    var buttonHtml = this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
  });
}

   function makeSound(key){
  if(key=="w"){
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  }else if(key=="a"){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }else if(key=="s"){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }else if(key=="d"){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }else if(key=="j"){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }else if(key=="k"){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }else if(key=="l"){ 
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
 
}
document.addEventListener("keypress", function(event){
  
    makeSound(event.key);
    buttonAnimation(event.key)
  
  });

  function buttonAnimation(currentKey){
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function(){
      currentButton.classList.remove("pressed");
    },100);
  }
