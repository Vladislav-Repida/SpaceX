const music = document.getElementById("music");
const btnMute = document.querySelector(".muted-btn-audio");

if(music.paused){
    btnMute.classList.add("active");
}

btnMute.addEventListener("click", ()=>{
    btnMute.classList.toggle("active");
    if(music.paused){
        music.play();
    }
    else{
        music.pause();
    }
});