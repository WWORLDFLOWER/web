$(function () {
    // 偵測目前 div 的 font-size
    let currentsize = $('div').css('fontSize')

    $('#shrink').click(function(){
        changeSize('small')  // 呼叫
    })
    $('#enlarge').click(function(){
        changeSize('big')
    })

    function changeSize(size){      // 宣告+定義
        let currentSize = parseInt($('div').css('fontSize'))
        if(size == 'small'){
            newSize = currentSize - 2
        }else{
            newSize = currentSize + 2
        }
        $('div').css('fontSize', newSize)
    }
});