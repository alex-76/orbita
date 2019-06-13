import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";


const state = {
    loadedCheckout : false,

};

const getters = {
    checkoutLoaded:  state => state.loadedCheckout,
    //getCartContent: state => state.cart
};

const actions = {

    createOrder({commit}, payload) {

        api.wcApi.createOrder( payload.data,function(order) {

              commit('cart/'+types.STORE_CART_CLEAR, null, { root: true } );
              commit('cart/'+types.CART_LOADED, true, { root: true } );
              //commit('namespace/TOGGLE_SAVING', null, { root: true });
        });
    },

};

const mutations = {

    //[types.STORE_CART_TOTAL](state, total) {
        //state.cartTotals = total;
        //console.log('Mutation: ' + state.cartTotals);
    //},
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};