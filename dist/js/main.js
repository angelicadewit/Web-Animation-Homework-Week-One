"use strict";function onDrawStart(e){isDrawing=!0,lastPos={x:e.offsetX,y:e.offsetY}}function onDraw(e){isDrawing&&(ctx.beginPath(),ctx.moveTo(lastPos.x,lastPos.y),ctx.lineTo(e.offsetX,e.offsetY),ctx.lineWidth=markerWidth.value,ctx.lineCap="round",!0===isErasing?(ctx.strokeStyle="#ffffff",ctx.globalAlpha=1):(ctx.strokeStyle=enteredColor.value,ctx.globalAlpha="0."+opacity.value),ctx.stroke(),lastPos={x:e.offsetX,y:e.offsetY})}function onDrawEnd(e){isDrawing=!1}function onImageLoaded(){ctx.drawImage(this,0,0,image.width,image.height,0,0,canvas.width,canvas.height)}var canvas=document.getElementById("drawingCanvas"),ctx=canvas.getContext("2d"),lastPos={x:0,y:0},enteredColor=document.querySelector('[name="color"]'),markerWidth=document.querySelector('[name="width"]'),opacity=document.querySelector('[name="opacity"]'),coloringPageOne=document.querySelector(".coloringpageone"),coloringPageTwo=document.querySelector(".coloringpagetwo"),coloringPageThree=document.querySelector(".coloringpagethree");console.log(opacity.value);var isDrawing=!1,isErasing=!1,image=new Image;document.querySelector(".eraser").addEventListener("click",function(e){isErasing=!0,console.log(isDrawing),lastPos={x:e.offsetX,y:e.offsetY}}),enteredColor.addEventListener("click",function(e){isErasing=!1,console.log(isDrawing),lastPos={x:e.offsetX,y:e.offsetY}}),coloringPageOne.addEventListener("click",function(){ctx.clearRect(0,0,canvas.width,canvas.height),image.src="dist/img/imageone.png",image.onload=onImageLoaded}),coloringPageTwo.addEventListener("click",function(){ctx.clearRect(0,0,canvas.width,canvas.height),image.src="dist/img/imagetwo.png",image.onload=onImageLoaded}),coloringPageThree.addEventListener("click",function(){ctx.clearRect(0,0,canvas.width,canvas.height),image.src="dist/img/imagethree.png",image.onload=onImageLoaded}),window.onload=function(){canvas.addEventListener("mousedown",onDrawStart),canvas.addEventListener("mousemove",onDraw),canvas.addEventListener("mouseup",onDrawEnd)};
//# sourceMappingURL=main.js.map