<template>
  <div id="app"> 
    <button @click="addCount">Add</button>
    <h3>{{count}}</h3>
  </div>
</template>

<script>
import store from './store'

export default {
  methods:{  //函數 "大部分" 放這裡
    addCount(){
        // this.$store.commit('addStoreCount')
        store.commit('addStoreCount')
    },
  },
  computed: {
    count(){
        return store.state.count
    },
  },
}
</script>
