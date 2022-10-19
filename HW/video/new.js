function doFirst() {
    //先跟HTML畫面產生關聯
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    defaultBar = document.getElementById('defaultBar');
    progressBar = document.getElementById('progressBar');
    full = document.getElementById('full');
    stopButton = document.getElementById('stopButton');
    upButton = document.getElementById('upButton');
    downButton = document.getElementById('downButton');
    mutedButton = document.getElementById('mutedButton');

	

    //在建立事件聆聽功能
    playButton.addEventListener('click', playOrPause);
    myMovie.addEventListener('click', playOrPause);
    defaultBar.addEventListener('click', clickedBar);
    full.addEventListener('click', fullScreen);
    stopButton.addEventListener('click', stopPlayer);
    upButton.addEventListener('click', volumeControlUp);
    downButton.addEventListener('click', volumeControlDown);
    mutedButton.addEventListener('click', volumeMuted);
    /* getComputedStyle() window底下的屬性，可以找到CSS的屬性值*/
    barSize = parseInt(getComputedStyle(defaultBar).width);
    // barSize = 640; //自己設定
	myMovie.addEventListener("timeupdate", updateTime);
}

function volumeMuted() {
    myMovie.volume = 0;
}

function volumeControlUp(e) {
    // console.log(myMovie.volume)
    if (myMovie.volume >= 1) {
        myMovie.volume = 1;
    } else {
        myMovie.volume += .1
    }
    console.log(myMovie.volume)
}

function volumeControlDown(e) {
    if (myMovie.volume < 0) {
        myMovie.volume = 0;
    } else {
        myMovie.volume -= .1
    }
    console.log(myMovie.volume)
}

function stopPlayer() {
    myMovie.pause();
    myMovie.currentTime = 0;
    playButton.innerText = 'play';
}


//影片的三種狀態：　正在撥放、暫停中、結束了
function playOrPause() { //如果影片正在跑，按按鈕則會暫停
    if (!myMovie.paused && !myMovie.ended) { //影片既非暫停，也非結束 -> 影片正在跑
        myMovie.pause();
        playButton.innerText = 'play';
    } else { //影片暫停中，或是結束了
        myMovie.play();
        playButton.innerText = 'pause';
        setInterval(update, 300); //卷軸
    }
}

function update() {
    /*只要影片還未結束，就繼續加總寬度; 跑完了回到0px寬度*/
    if (!myMovie.ended) {
        /*===
        barSize 是我們設定的640
        myMovie.duration 是影片的總長度
        myMovie.currentTime　是目前影片撥放的時間
        (barSize / 影片的總長度) -> 每一秒要多多少px寬度
        乘上目前影片時間，就會得到目前的時間軸常長度     
        ===*/
        let size = barSize / myMovie.duration * myMovie.currentTime;
        progressBar.style.width = `${size}px`;
    } else {
        progressBar.style.width = '0px';
        playButton.innerText = 'play';
    }
}

function clickedBar(e) {
    let mouseX = e.clientX - defaultBar.offsetLeft; //取得滑鼠點擊後，滾軸的寬度
    progressBar.style.width = `${mouseX}px`;
    //找到更新的時間
    let newTime = mouseX / (barSize / myMovie.duration);
    myMovie.currentTime = newTime;
}

function fullScreen() {
    myMovie.webkitEnterFullScreen();
}

window.addEventListener('load', doFirst);



  function replay() {
       myMovie.currentTime = 0;
       myMovie.play();
  }

  function updateTime() {
	   p = 0;
       p = Math.floor(myMovie.currentTime/myMovie.duration * 100);
       document.getElementById("showProgress").innerHTML = p + "%";
       document.getElementById("probar").style.width = p + "%";
  }