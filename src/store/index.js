import Vue from 'vue'
import Vuex from 'vuex'

import rating from '../mocks/Rating'

Vue.use(Vuex)

const loadRating= (time) => {
   return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(rating);
    },time)
  })
}
export default new Vuex.Store({
  state: {
    rating: [],
  },
  getters: {
    getRating(state){
      return state.rating
    }
  },
  mutations: {
    SET_RATING(state,payload){
      state.rating = payload
    }
  },
  actions: {
    async loadRating({ commit },payload) {
      try{
        const rating = await loadRating(payload);
        commit('SET_RATING', rating)
        console.log(rating,'rating');
      }catch(error){
        console.error(error);
      }
    }
  }
})