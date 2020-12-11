import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from 'gerters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Switch_:localStorage.getItem('state')  //dattiem or nightime
  },
  modules:{
    Switch_(state,status){
      // localStorage.setItem(state) = status
    }
  },
getters
})

export default store