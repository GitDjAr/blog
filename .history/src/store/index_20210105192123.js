import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Switch_:localStorage.getItem('state')  //dattiem or nightime
  },
  mutations:{
    Switch_(state,status){
      localStorage.setItem('白天or夜晚',status)
    }
  },
getters
})

export default store