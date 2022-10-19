function doFirst(){
    // 先跟 HTML 產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')


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

    canvas.addEventListener('mousemove',usePen)

}
function usePen(e){
    context.strokeStyle='red';
    context.fillStyle='red';

    // 矩形畫筆
    // context.fillRect(e.pageX, e.pageY, 5, 5);
    // console.log(12)
    
    // 圓形畫筆
    context.beginPath();
    context.arc(e.pageX, e.pageY, 5, 0, 2 * Math.PI);
    context.stroke();
}

window.addEventListener('load', doFirst)
