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

    // 四分之一
    context.strokeStyle='rgba(0,0,0,.7)';
    
    // 水平線
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();
    
    // 垂直線
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
    // =======

    context.font='bold 25px Consolas';
    context.strokeStyle='red';
    context.lineWidth=5;
    

    // arc
    context.fillText('arc()', 50, 50);
    context.beginPath();

    // context.arc(x, y, radius, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle, anticlockwise);
    // context.arc(250, 200, 150, 0,Math.PI, false);
    // context.arc(250, 200, 150, 0,Math.PI, true);
    // context.arc(250, 200, 150, 0.3 * Math.PI, 1.7 * Math.PI);
    context.arc(250, 200, 150, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(300, 250, 80, 0, 2 * Math.PI);
    context.fill();



    // arrTo
    context.fillText('arcTo()', 550, 50);
    context.beginPath();
    
    context.moveTo(650, 250);

    // context.arcTo(x1, y1, x2, y2, radius);
    context.arcTo(800, 100, 900, 300, 120);
    // context.arcTo(800, 100, 900, 300, 250);
    context.stroke();
    
        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(650, 250);
        context.lineTo(800, 100);
        context.lineTo(900, 300);
        context.stroke();
    


    // quadraticCurveTo
    context.fillText('quadraticCurveTo()', 50, 450);
    context.beginPath();
    context.strokeStyle='red';
    context.lineWidth=5;

    context.moveTo(150, 650); // 起點x,y
    // context.quadraticCurveTo(cpx, cpy, x, y);
                            // (中點x,中點y,終點x,終點y)
    context.quadraticCurveTo(300, 500, 400, 700);
    context.stroke();

        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(150, 650);
        context.lineTo(300, 500);
        context.lineTo(400, 700);
        context.stroke();
    
    
    // bezierCurveTo
    context.fillText('bezierCurveTo()', 550, 450);
    context.beginPath();
    context.strokeStyle='red';
    context.lineWidth=5;

    context.moveTo(600, 650);
    // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    
    context.bezierCurveTo(675, 450, 700, 750, 900, 700);
    context.stroke();
    
        // 輔助線
        context.strokeStyle='blue';
        context.lineWidth=1;
        context.beginPath();
        context.moveTo(600, 650);
        context.lineTo(675, 450);
        context.lineTo(700, 750);
        context.lineTo(900, 700);
        context.stroke();
    
    
    
    
    
    
}

window.addEventListener('load', doFirst)
