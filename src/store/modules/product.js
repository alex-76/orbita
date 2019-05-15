import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";


const state = {
    product : [],
    loadedProduct : false,
};

const getters = {
    productLoaded: state => state.loadedProduct,
    getProduct: state => state.product
};

const actions = {

    // Get all products
    getProduct({ commit }, id) {
        api.wcApi.getProduct( id, function(product) {
            product = (!_.isEmpty(product)) ? product : [];
            commit(types.STORE_FETCHED_SINGLE_PRODUCT, { product });
            commit(types.PRODUCT_SINGLE_LOADED, (!_.isEmpty(product))? true : false);
        });
    },

    // Clear state product
    clearStateProduct({ commit }) {
        commit('RESET_STATE_PRODUCT');
    },

    addCart() {
        api.wcApi.getCartContent( function() {

            // product = (!_.isEmpty(product)) ? product : [];
            // commit(types.STORE_FETCHED_SINGLE_PRODUCT, { product });
            // commit(types.PRODUCT_SINGLE_LOADED, (!_.isEmpty(product))? true : false);
        });
    }
};

const mutations = {

    [types.STORE_FETCHED_SINGLE_PRODUCT](state, { product }) {
        state.product = product;
    },

    [types.PRODUCT_SINGLE_LOADED](state, val) {
        state.loadedProduct = val;
    },
    [types.RESET_STATE_PRODUCT](state) {
        state.product = [];
        state.loadedProduct = false;
    }
};



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};