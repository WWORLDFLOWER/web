function doFirst(){
    // barsize = 635
    // 先跟 html 產生關聯
    myMovie = document.getElementById('myMovie')
    playButton = document.getElementById('playButton')
    defaultBar = document.getElementById('defaultBar')
    progress = document.getElementById('progress')

    barsize = parseInt(window.getComputedStyle(defaultBar).width)

    // 再建事件聆聽功能
    playButton.addEventListener('click',playOrParse)
    myMovie.addEventListener('click',playOrParse)
    defaultBar.addEventListener('click',clickedBar)


    // 全螢幕
    // fullButton.addEventListener('click',function(){
    //     myMovie.webkitEnterFullScreen()
    // })


}
function playOrParse(){
    // 影片非暫停且非結束
    if(!myMovie.paused && !myMovie.ended){   //影片正在跑
        myMovie.pause()
        playButton.innerText = 'play'
        clearInterval(timer)
    }else{ // 影片暫停也結束
        myMovie.play()
        playButton.innerText = 'pause'
        setInterval(update, 300)
    }
}
// 影片結束回原點
function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width =`${size}px`
    }else{  //時間歸零
        progress.style.width = `0px`
        playButton.innerText = 'play'
        myMovie.currentTime = 0
    }
}
// 卷軸跑動
function clickedBar(e){
    let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`
    let newTime = mouseX / (barsize / myMovie.duration)
    myMovie.currentTime = newTime
}

window.addEventListener('load',doFirst)