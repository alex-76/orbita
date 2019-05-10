import api from "../../api";
import _ from "lodash";
import * as types from "../mutation-types";

const namespaced = {
  namespaced: true
};

// initial state
const state = {
  all: [],
  loaded: false,
  page: null
};

// getters
const getters = {

  allPages: state => state.all,

  allPagesLoaded: state => state.loaded,

  page: state => id => {
    let field = typeof id === "number" ? "id" : "slug";
    let page = state.all.filter(page => page[field] === id);
    return !_.isNull(_.first(page)) ? _.first(page) : false;
  },

  pageContent: state => id => {
    let field = typeof id === "number" ? "id" : "slug";
    let page = state.all.filter(page => page[field] === id);
    return !_.isNull(_.first(page).content.rendered)
      ? _.first(page).content.rendered
      : false;
  },

  somePages: state => limit => {
    if (state.all.length < 1) {
      return false;
    }
    let all = [...state.all];
    return all.splice(0, Math.min(limit, state.all.length));
  },
  pageTitle: state => id => {

      let field = typeof id === "number" ? "id" : "slug";
      let page = state.all.filter(page => page[field] === id);
      return page[0].title.rendered;

  }

};

// actions
const actions = {
  getAllPages({ commit }) {
    api.pagesApi.getPages(pages => {
      commit(types.STORE_FETCHED_PAGES, { pages });
      commit(types.PAGES_LOADED, true);
      //commit(types.INCREMENT_LOADING_PROGRESS);
    });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES](state, { pages }) {
    state.all = pages;
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
