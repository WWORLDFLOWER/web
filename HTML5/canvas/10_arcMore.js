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

    context.strokeStyle='red';
    context.lineWidth=15;

    context.translate(200, 200); //(200,200)----->(0,0)
    
    context.beginPath();
    context.arc(0, 0, 150, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -110);
    context.stroke();
    
    context.translate(-200, -200); // 歸位

    // 下一個圓
    context.translate(500, 500);

    let radius = 180
    context.lineWidth = 20;
    
                        // context.createRadialGradient(x1, y1, r1, x2, y2, r2);
    let circleGradient = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circleGradient.addColorStop(0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(1, '#666');
    
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);

    context.strokeStyle=circleGradient;
    context.stroke();

    context.translate(-500, -500); // 歸位
    
}

window.addEventListener('load', doFirst)
