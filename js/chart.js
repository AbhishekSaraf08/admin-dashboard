const canvas=document.getElementById("chart");
if(canvas){
const ctx=canvas.getContext("2d");
ctx.fillStyle="blue";
ctx.fillRect(20,100,40,80);
ctx.fillStyle="green";
ctx.fillRect(80,60,40,120);
ctx.fillStyle="red";
ctx.fillRect(140,40,40,140);
}
