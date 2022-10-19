function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')


/*
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
*/




    context.strokeStyle='black';
    context.lineWidth=3;

    // 1
    context.beginPath();
    context.moveTo(500, 100);
    context.lineTo(540, 290);
    context.stroke();
    
    // 2
    context.beginPath();
    context.moveTo(500, 100);
    context.lineTo(460, 290);
    context.stroke();

    // 3
    context.beginPath();
    context.moveTo(290, 190);
    context.lineTo(460, 290);
    context.stroke();

    // 4
    context.beginPath();
    context.moveTo(290, 190);
    context.lineTo(390, 360);
    context.stroke();

    // 5
    context.beginPath();
    context.moveTo(200, 400);
    context.lineTo(390, 360);
    context.stroke();

    // 6
    context.beginPath();
    context.moveTo(200, 400);
    context.lineTo(390, 440);
    context.stroke();
    
    // 7
    context.beginPath();
    context.moveTo(290, 610);
    context.lineTo(390, 440);
    context.stroke();

    // 8
    context.beginPath();
    context.moveTo(290, 610);
    context.lineTo(460, 510);
    context.stroke();

    // 9
    context.beginPath();
    context.moveTo(500, 700);
    context.lineTo(460, 510);
    context.stroke();

    // 10
    context.beginPath();
    context.moveTo(500, 700);
    context.lineTo(540, 510);
    context.stroke();

    // 10
    context.beginPath();
    context.moveTo(500, 700);
    context.lineTo(540, 510);
    context.stroke();

    // 11
    context.beginPath();
    context.moveTo(710, 610);
    context.lineTo(540, 510);
    context.stroke();

    // 12
    context.beginPath();
    context.moveTo(710, 610);
    context.lineTo(610, 440);
    context.stroke();

    // 13
    context.beginPath();
    context.moveTo(800, 400);
    context.lineTo(610, 440);
    context.stroke();

    // 14
    context.beginPath();
    context.moveTo(800, 400);
    context.lineTo(610, 360);
    context.stroke();

    // 15
    context.beginPath();
    context.moveTo(710, 190);
    context.lineTo(610, 360);
    context.stroke();

    // 16
    context.beginPath();
    context.moveTo(710, 190);
    context.lineTo(540, 290);
    context.stroke();






    
    
}

window.addEventListener('load', doFirst)
