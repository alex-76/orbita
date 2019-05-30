import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";


const state = {
    loadedCart : false,
    cart : []
};

const getters = {
    cartLoaded: state => state.loadedCart,
    getCartContent: state => state.cart

};

const actions = {

    addCart({commit}, payload ) {

        api.wcApi.addCart( payload.id, payload.q, function(cart) {
             //cart = (!_.isEmpty(cart)) ? cart : [];
             commit(types.STORE_CART_PRODUCTS, cart );
             commit(types.CART_LOADED, true);
        });
    },

    clearCart({commit}) {
        api.wcApi.clearCart(function(cart) {
            commit(types.STORE_CART_CLEAR, cart );
        });
    }

};

const mutations = {

    [types.STORE_CART_PRODUCTS](state, cart ) {
        state.cart.push(cart);
    },

    [types.CART_LOADED](state, val) {
        state.loadedCart = val;
    },

    [types.STORE_CART_CLEAR](state) {
        state.cart = [];
    },
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};