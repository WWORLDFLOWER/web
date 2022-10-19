import Vue from 'vue'
// import Vuex from 'vuex' // 1
import Vuex,{Store} from 'vuex'   // 2

Vue.use(Vuex)

// const store = new Vuex.Store({
const store = new Store({
    state: {  // 類似 data
        count: 0,

        x: 100,
        y: true,
        z: new Date(),
    },
    mutations: {    // 類似 methods
        addStoreCount(state){
            state.count += 1

            state.x += 10
        },
    },
    getters: {},
    actions: {},
})

export default store