import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Switch_:true ? true : false //dattiem or nightime
  },
  mutations:{
    Switch_(state,status){
      localStorage.setItem('state',status)
    }
  },
getters
})

export default store