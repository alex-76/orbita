import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";


const state = {
    loadedCart : false,
    cart : [],
    cartTotals : null
};

const getters = {
    cartLoaded:     state => state.loadedCart,
    getCartContent: state => state.cart,
    getCartTotals:  state => state.cartTotals


};

const actions = {

    addCart({commit}, payload ) {

        api.wcApi.addCart( payload.id, payload.q, function(cart) {
             commit(types.STORE_CART_PRODUCTS, cart );
             commit(types.CART_LOADED, true);
        });
    },
    removeItemCart({commit}, payload) {

        api.wcApi.removeItemCart(payload.key,function(cart) {
            commit(types.STORE_CART_REMOVE, payload.id );
        });
    },
    clearCart({commit}) {

        api.wcApi.clearCart(function(cart) {
            commit(types.STORE_CART_CLEAR, cart );
        });
    },
    cartTotals({commit}) {

        api.wcApi.getCartTotals(function(total) {
            //console.log('api: ' + total.subtotal);
            commit(types.STORE_CART_TOTAL, total );
        });
    }

};

const mutations = {

    [types.STORE_CART_PRODUCTS](state, cart ) {

        if(_.findIndex(state.cart, { product_id: cart.product_id}) === -1) {
            state.cart.unshift(cart);
        }
        else {
            state.cart.splice(_.findIndex(state.cart, { product_id: cart.product_id}), 1);
            state.cart.unshift(cart);
        }
    },

    [types.CART_LOADED](state, val) {
        state.loadedCart = val;
    },

    [types.STORE_CART_CLEAR](state) {
        state.cart = [];
        state.loadedCart = false;
    },
    [types.STORE_CART_REMOVE](state, id) {

        if(_.findIndex(state.cart, { product_id: id}) !== -1) {
            state.cart.splice(_.findIndex(state.cart, { product_id: id}), 1);
        }
        if(state.cart.length === 0) {
            state.loadedCart = false;
        }
    },

    [types.STORE_CART_TOTAL](state, total) {
        state.cartTotals = total;
        //console.log('Mutation: ' + state.cartTotals);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};