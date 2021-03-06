import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";

const state = {
    allProducts : [],
    loadedShop : false,
};

const getters = {

    allProductsLoaded: state => state.loadedShop,

    getProducts: state => state.allProducts,

};

const actions = {

    // Get all products
    getProducts({ commit }) {
        api.wcApi.getProducts( products => {

            products = (!_.isEmpty(products)) ? products : [];

            commit(types.STORE_FETCHED_PRODUCTS, { products });
            commit(types.PRODUCTS_LOADED, (!_.isEmpty(products))? true : false);

        });
    },
};

const mutations = {

    [types.STORE_FETCHED_PRODUCTS](state, { products }) {
        state.allProducts = products;
    },

    [types.PRODUCTS_LOADED](state, val) {
        state.loadedShop = val;
    }

};



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};