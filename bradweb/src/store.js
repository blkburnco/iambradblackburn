import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  setIsNavOpen(yesno) {
    store.isNavOpen = yesno;
  },
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};
