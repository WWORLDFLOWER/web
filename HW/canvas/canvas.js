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


    // =======喜
    // 外圓
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(250, 200, 150, 0, 2 * Math.PI);
    context.stroke();

    // 左眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(200, 150, 25, 0, 2 * Math.PI);
    context.stroke();

    // 右眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(300, 150, 25, 0, 2 * Math.PI);
    context.stroke();

    // 嘴巴
    context.beginPath();
    context.strokeStyle='black';
    context.lineWidth=3;

    context.moveTo(150, 250); // 起點x,y
    // context.quadraticCurveTo(cpx, cpy, x, y);
                            // (中點x,中點y,終點x,終點y)
    context.quadraticCurveTo(250, 350, 350, 250);
    context.stroke();
    

    // =======怒
    // 外圓
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(750, 200, 150, 0, 2 * Math.PI);
    context.stroke();

    // 左眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(700, 150, 25, 0, 2 * Math.PI);
    context.stroke();

    // 右眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(800, 150, 25, 0, 2 * Math.PI);
    context.stroke();

    // 嘴巴
    context.beginPath();
    context.strokeStyle='black';
    context.lineWidth=3;

    context.moveTo(670, 300);
    // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    context.bezierCurveTo(700, 150, 770, 400, 850, 250);
    context.stroke();

    // 怒右上
    context.beginPath();
    context.strokeStyle='red';
    context.lineWidth=5;

    context.moveTo(830, 50); // 起點x,y
    // context.quadraticCurveTo(cpx, cpy, x, y);
                            // (中點x,中點y,終點x,終點y)
    context.quadraticCurveTo(870, 70, 830, 100);
    context.moveTo(850, 30); // 起點x,y
    context.quadraticCurveTo(870, 70, 900, 40);
    context.stroke();
    context.moveTo(840, 120); // 起點x,y
    context.quadraticCurveTo(870, 70, 890, 130);
    context.moveTo(920, 60); // 起點x,y
    context.quadraticCurveTo(870, 70, 920, 120);
    context.stroke();



    // =======哀
    // 外圓
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(250, 600, 150, 0, 2 * Math.PI);
    context.stroke();

    // 左眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(200, 550, 25, 0, 2 * Math.PI);
    context.stroke();

    // 右眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(300, 550, 25, 0, 2 * Math.PI);
    context.stroke();

    // 嘴巴
    context.beginPath();
    context.strokeStyle='black';
    context.lineWidth=3;

    context.moveTo(150, 670); // 起點x,y
    // context.quadraticCurveTo(cpx, cpy, x, y);
                        // (中點x,中點y,終點x,終點y)
    context.quadraticCurveTo(250, 600, 350, 670);
    context.stroke();

    // 眼淚
    context.beginPath();
    context.strokeStyle='lightblue';
    context.lineWidth=5;

    context.moveTo(300, 580); // 起點x,y
    // context.quadraticCurveTo(cpx, cpy, x, y);
                            // (中點x,中點y,終點x,終點y)
    context.quadraticCurveTo(285, 630, 300, 630);
    context.moveTo(300, 580); // 起點x,y
    context.quadraticCurveTo(315, 630, 300, 630);
    context.fillStyle='lightblue';
    context.fill();
    



    // =======樂
    // 外圓
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(750, 600, 150, 0, 2 * Math.PI);
    context.stroke();

    // 左眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(700, 550, 25, 0, 2 * Math.PI);
    context.stroke();

    // 右眼
    context.strokeStyle='black';
    context.lineWidth=3;
    context.beginPath();
    context.arc(800, 550, 25, 0, 2 * Math.PI);
    context.stroke();

    // 嘴巴
    context.beginPath();
    context.strokeStyle='black';
    context.lineWidth=3;

    context.moveTo(650, 600); // 起點x,y
    // context.quadraticCurveTo(cpx, cpy, x, y);
                            // (中點x,中點y,終點x,終點y)
    context.quadraticCurveTo(750, 750, 850, 600);
    context.moveTo(650, 600); // 起點x,y
    context.quadraticCurveTo(750, 850, 850, 600);
    context.stroke();




    
    
    
    
    
    
}

window.addEventListener('load', doFirst)
