import api from "../../api";
import _ from "lodash";
import * as types from "../mutation-types";

const namespaced = {
  namespaced: true
};

// initial state
const state = {
  allPages: [],
  loaded: false,
  page: null
};

// getters
const getters = {

  allPages: state => state.allPages,

  allPagesLoaded: state => state.loaded,

  page: state => id => {
    let field = typeof id === "number" ? "id" : "slug";
    let page = state.allPages.filter(page => page[field] === id);
    return !_.isNull(_.first(page)) ? _.first(page) : false;
  },

  pageContent: state => id => {
    let field = typeof id === "number" ? "id" : "slug";
    let page = state.allPages.filter(page => page[field] === id);
    return !_.isNull(_.first(page).content.rendered)
      ? _.first(page).content.rendered
      : false;
  },
  //Use Widget VWPages
  somePages: state => limit => {
    if (state.allPages.length < 1) {
      return false;
    }
    let all = [...state.allPages];
    return all.splice(0, Math.min(limit, state.allPages.length));
  },

  pageContentHome: function(state) {
      let page = state.allPages.filter(function(cp){
        return cp.slug === 'home';
      });
      return _.first(page);
  }

};

// actions
const actions = {
  getAllPages({ commit }) {
    api.pagesApi.getPages(pages => {
      commit(types.STORE_FETCHED_PAGES, { pages });
      commit(types.PAGES_LOADED, true);
    });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES](state, { pages }) {
    state.allPages = pages;
  },

  [types.PAGES_LOADED](state, val) {
    state.loaded = val;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
