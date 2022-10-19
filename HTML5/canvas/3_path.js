function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')


    context.fillStyle='#ccc';
    context.strokeStyle='maroon';
    context.lineWidth=10;
    
    
    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(400, 50);
    context.lineTo(50, 200);
    // context.lineTo(100, 100);
    context.closePath();
    
    context.stroke();
    context.fill();
    
    
    
}

window.addEventListener('load', doFirst)

// window.onload = doFirst
// window.onload = function(){}