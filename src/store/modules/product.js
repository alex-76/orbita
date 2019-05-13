import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";

const namespaced = {
    namespaced : true
};

const state = {
    product : [],
    loaded : false,
};

const getters = {
    productLoaded: state => state.loaded,
    getProduct: state => state.product
};

const actions = {

    // Get all products ( Редактировать этот блок...!!!!!!!!!!!!!)
    getProduct({ commit }, id) {
        api.wcApi.getProduct( (id, product) => {

            //product = (!_.isEmpty(product)) ? product : [];

            commit(types.STORE_FETCHED_SINGLE_PRODUCT, { product });
            commit(types.PRODUCT_SINGLE_LOADED, (!_.isEmpty(product))? true : false);

        });
    },
};

const mutations = {

    [types.STORE_FETCHED_SINGLE_PRODUCT](state, { product }) {
        state.product = product;
    },

    [types.PRODUCT_SINGLE_LOADED](state, val) {
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