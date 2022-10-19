function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')


    // 格線
    for(let i = 0; i < 100; i++){
        let interval = i * 50

        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        
        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
        
    }
    context.strokeStyle='rgba(0,0,0,.3)';
    context.stroke();
    // ==========

    // lineCap
    context.strokeStyle='red';
    context.lineWidth=15;
    
    context.beginPath();
    context.lineCap='butt';
    context.moveTo(150, 150);
    context.lineTo(250, 150);
    context.stroke();
    
    context.beginPath();
    context.lineCap='round';
    context.moveTo(150, 200);
    context.lineTo(250, 200);
    context.stroke();

    context.beginPath();
    context.lineCap='square';
    context.moveTo(150, 250);
    context.lineTo(250, 250);
    context.stroke();
    
    // lineJoin
    context.lineJoin='miter';
    context.strokeRect(150, 350, 100, 150);

    context.lineJoin='bevel';
    context.strokeRect(300, 350, 100, 150);

    context.lineJoin='round';
    context.strokeRect(450, 350, 100, 150);
    
    
    
}

window.addEventListener('load', doFirst)
