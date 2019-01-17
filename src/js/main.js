const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let lastPos = {
    x: 0,
    y: 0
};

let enteredColor = document.querySelector(`[name="color"]`)
let markerWidth = document.querySelector(`[name="width"]`)
let opacity = document.querySelector(`[name="opacity"]`)

console.log(opacity.value)

let isDrawing = false
// let isErasing = false

// function drawOnLoad(){
//     let image = new Image()
//     image.src="dist/img/logo.png";
//     image.onload = onImageLoaded
// }

// function onImageLoaded(){
//     ctx.drawImage(this, 262, 162);
// }

function onDrawStart(e){
    isDrawing = true
    // isErasing = false
    lastPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    
}

function onDraw(e){
    if (!isDrawing){
        return
    }

    // if (isErasing){
    //     ctx.globalCompositeOperation = 'destination-out'
    // } 

    // if (isDrawing){

    


        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = enteredColor.value;
        ctx.lineWidth = markerWidth.value;
        ctx.globalAlpha = `0.${opacity.value}`;
        ctx.lineCap = 'round';
        ctx.stroke();

    
        lastPos = {
            x: e.offsetX,
            y: e.offsetY
        }
    // }

}


function onDrawEnd(e){
    isDrawing = false
}

// document.querySelector(`.eraser`).addEventListener(`click`, function(){
//     // isErasing = true
//     // isDrawing = false
    
// })

// enteredColor.addEventListener(`click`, onDrawStart)

window.onload = function(){
    canvas.addEventListener("mousedown", onDrawStart)    
    canvas.addEventListener("mousemove", onDraw)
    canvas.addEventListener("mouseup", onDrawEnd)
}
