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

        //console.log(payload.data);

        api.wcApi.createOrder( payload.data,function(order) {

             console.log('Response: ' + order.id);
             //commit(types.STORE_CART_PRODUCTS, cart );
             //commit(types.CART_LOADED, true);
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