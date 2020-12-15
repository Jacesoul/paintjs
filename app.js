const canvas=document.getElementById('jsCanvas');

function onMouseMove(event){    
    const x =event.offsetX;
    const y =event.offsetY;
    console.log(x,y);

}

function onMouseDown(event){
    
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedwon",onMouseDown)
}
