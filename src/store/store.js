import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        flavor : '123123'
    },
    mutations: {
        change(state,flavor){
            state.flavor = flavor;
        }
    },
    getters: {
        flavor: state => state.flavor
    },
    actions: {}
})
