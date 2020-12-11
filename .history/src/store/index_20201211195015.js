import Vue from 'vue'
import Vuex from 'vuex'
import getters from 'gerters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Switch:localStorage.getters('state')  //dattiem or nightime
  },
  modules:{
    Switch(state,staus){
      localStorage.setItem(state) = staus
    }
  },
  getters
})

export default store