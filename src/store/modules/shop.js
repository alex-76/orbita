import api from "../../api";
import _u from "underscore";
import * as types from "../mutation-types";

const namespaced = {
    namespaced : true
};

const state = {
    allProducts : [],
    loadedproduct      : false,
};

const getters = {

    allProductsLoaded: state => state.loadedproduct,

    getProducts: state => state.allProducts,

};

const actions = {

    // Get all products
    getProducts({ commit }) {
        api.wcApi.getProducts( products => {
            if(products.length > 0) {
                commit(types.STORE_FETCHED_PRODUCTS, { products });
                commit(types.PRODUCTS_LOADED, true);
            } else {
                products = [];
                commit(types.STORE_FETCHED_PRODUCTS, { products });
                commit(types.PRODUCTS_LOADED, false);
            }
        });
    },
};

const mutations = {

    [types.STORE_FETCHED_PRODUCTS](state, { products }) {
        state.allProducts = products;
    },

    [types.PRODUCTS_LOADED](state, val) {
        state.loadedproduct = val;
    }

};



export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
};