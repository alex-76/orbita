import api from '../../api'
import * as types from '../mutation-types'

const namespaced = {
    namespaced: true
};


// initial state
const state = {
  all: [],
  loaded: false
}

// getters
const getters = {
  // Returns an array all categories
  allCategories: state => state.all,
  allCategoriesLoaded: state => state.loaded
}

// actions
const actions = {
  getAllCategories ({ commit }) {
    api.categoriesAPI.getCategories(categories => {
      commit(types.STORE_FETCHED_CATEGORIES, { categories })
      commit(types.CATEGORIES_LOADED, true)
      //commit(types.INCREMENT_LOADING_PROGRESS)
    })
  }
}

// mutations
const mutations = {
  [types.STORE_FETCHED_CATEGORIES] (state, { categories }) {
    state.all = categories
  },

  [types.CATEGORIES_LOADED] (state, bool) {
    state.loaded = bool
  }
}

export default {
    namespaced,
  state,
  getters,
  actions,
  mutations
}
