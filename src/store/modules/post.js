import api from "../../api";
import _ from "lodash";
import * as types from "../mutation-types";

const namespaced = {
  namespaced: true
};

// const createPostSlug = post => {
//   let slug = post.link.replace("http://" + window.location.hostname, "");
//   slug = slug.replace("https://" + window.location.hostname, "");
//   post.slug = slug;
//   return post;
// };

// initial state
const state = {
  recent: [],
  loadedPost: false
};

// getters
const getters = {
  recentPosts: state => limit => {
    if (
      !limit ||
      !_.isNumber(limit) ||
      _.isNull(limit) ||
      typeof limit == "undefined"
    ) {
      return state.recent;
    }
    let recent = state.recent;
    return recent.slice(0, limit);
  },

  recentPostsLoaded: state => state.loadedPost
};

// actions
const actions = {
  getPosts({ commit }, { limit }) {
    api.postsApi.getPosts(limit, posts => {
      commit(types.STORE_FETCHED_POSTS, { posts });
      commit(types.POSTS_LOADED, true);
    });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_POSTS](state, { posts }) {
    state.recent = posts;
  },
  [types.POSTS_LOADED](state, val) {
    state.loadedPost = val;
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
