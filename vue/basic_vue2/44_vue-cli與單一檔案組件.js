vue-cli 與單一檔案組件
    - vue-cli: Vue.js Command-Line Interface (命令列介面)

    - 單一檔案組件: 將 html, css, script 放在同一個檔案(.vue)裡，該檔案就是『一個』組件
                   但是這個檔案需要經過轉換才能在瀏覽器上運行

    - 工具:
      - node.js(LTS): 讓電腦有可以直接執行 JavaScript 的環境 (https://nodejs.org/en/)
      - npm: node.js 裡面的軟體，會隨著 node.js 自動安裝 (https://zh.wikipedia.org/zh-tw/Npm)
      - webpack: 是一個轉換工具 (https://webpack.js.org/)
                 可以將單一檔案組件(.vue)打包轉換成 .js
      - vue-cli: 因為 webpack 設定比較繁複，所以 Vue 的開發團隊開發這套工具，方便我們建立 webpack

--------------------------cd vue-lessons-----------------------------------------------------------------
安裝
    1. node.js
    2. 打開命令提示字元，將目標移到 C:\web\vue
       (MAC: 終端機 --> cd vue資料夾的路徑(cmd + option + c 即可複製路徑))

       指令: npm i -g vue-cli (npm 幫你從雲端下載 vue-cli)
             (MAC: sudo npm i -g vue-cli)
       指令: vue (查看 vue 有哪些指令可以用)
       指令: vue list (查看 vue 有哪些 template 可以用)
       指令: vue init webpack-simple 專案名稱 (建立 vue 的專案)
             vue init webpack-simple vue-lessons 

       此時，已經開好專案自料夾 vue-lessons 

       指令: cd vue-lessons
       指令: npm install
       指令: npm run dev

-------------------------------------------------------------------------------------------
單一檔案組件(.vue) 的規則:
    1. template 和 script 起碼要有一個，先後順序沒有差別
    2. style 不一定要有，如果要寫，要放在最後面

-------------------------------------------------------------------------------------------
關於 import 和 export
    假設資料夾 src 有兩個檔案 new.js 和 counter.js
    counter 組件要給 new 組件使用
    - counter 組件要將內容匯出 (export)
    - new 組件要匯入(import) counter 組件

    counter.js
        const Counter = Vue.component('counter', {
            // ...
        })

        export default Counter

    ----------------------------------------------
    new.js
        import Counter from './counter'  // import Counter from '相對路徑'
                                         // 附檔名是 js 則可以省略

        new Vue({
            el: '#app',
            data: {},
            methods: {},
            components: {
                Counter,
            },
            template: `
                <div>
                    <Counter />
                </div>
            `,
        })

-------------------------------------------------------------------------------------------
src\main.js

    new Vue({
        el: '#app',
        render: h => h(App)
    })

    render 函數會傳入一個 createElement()
    createElement 函數: 用來輸入一個組件並回傳他要輸出的元素

    render: function(createElement){
        return createElement(App)
    },
    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

    render: createElement => createElement(App),
    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

    慣例上，createElement 會簡寫成 h

    render: h => h(App),