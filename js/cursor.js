var touchSupport = 'ontouchstart' in window 
|| window.DocumentTouch && document instanceof window.DocumentTouch;

const cursorFigure = document.querySelector(".cursor");

if(!touchSupport){
    document.body.addEventListener("mousemove", (e)=>{
        const x = e.screenX;
        const y = e.screenY;
        
        cursorFigure.style.transform = `translate3d(${x-50}px, ${y-100}px, 0)`;
    });
}
else{
    cursorFigure.style.display = "none";
}