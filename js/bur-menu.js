const wraperBurMenu = document.querySelector("._wraper-bur-menu");
const btnBurMenu = document.querySelector("._btn-bur-menu");

document.addEventListener("click", (e)=>{
    if(e.target.closest("._btn-bur-menu")){
        wraperBurMenu.classList.toggle("active");
        btnBurMenu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    }
    if(!e.target.closest("._btn-bur-menu") && !e.target.closest("._wraper-bur-menu")){
        wraperBurMenu.classList.remove("active");
        btnBurMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});