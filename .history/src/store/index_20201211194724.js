import Vue from 'vue'
import Vuex from 'vuex'
import getters from 'gerters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Switch:localStorage.getters('state')  //dattiem or nightime
  }
  modeus:{

  },
  getters
})

export default store