

for(let i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",()=>{
    var putanja="./sounds/";
    var key;
    if(i===0){putanja+="crash.mp3";key="w";}
    else if(i===1){putanja+="kick-bass.mp3";key="a";}
    else if(i===2){putanja+="snare.mp3";key="s";}
    else if(i===3){putanja+="tom-1.mp3";key="d";}
    else if(i===4){putanja+="tom-2.mp3";key="j";}
    else if(i===5){putanja+="tom-3.mp3";key="k";}
    else {putanja+="tom-4.mp3";key="l";}
    var audio = new Audio(putanja);
    audio.play();
    Animacija(key);
    
})
}

document.addEventListener("keydown",(event)=>{
    let putanja="./sounds/";
    let key=event.key;
switch (key){
    case "w": putanja+="crash.mp3";
    break;
    case "a":putanja+="kick-bass.mp3";
    break;
    case "s":putanja+="snare.mp3";
    break;
    case "d":putanja+="tom-1.mp3";
    break;
    case "j":putanja+="tom-2.mp3"
    break;
    case "k":putanja+="tom-3.mp3";
    break;
    case "l":putanja+="tom-4.mp3";
    break;
    default:
        putanja="";
}
    var audio=new Audio(putanja);
    audio.play();
    Animacija(key);

})

function Animacija(slovo){
var dugme=document.querySelector("."+slovo);
dugme.classList.add("pressed");
setTimeout(()=>{dugme.classList.remove("pressed")},200);
}
