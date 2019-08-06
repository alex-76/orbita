import api from "../../api";
import _ from "underscore";
import * as types from "../mutation-types";


const state = {
    loadedCheckout : false,
    listPayments : [],
};

const getters = {
    loadedCheckout: state => state.loadedCheckout,
    listPayments: state => state.listPayments
};

const actions = {

    createOrder({commit}, payload) {

        commit(types.CHECKOUT_LOADED, true);

        api.wcApi.createOrder( payload.data,function(order) {

              commit('cart/'+types.STORE_CART_CLEAR, null, { root: true } );
              commit('cart/'+types.CART_LOADED, true, { root: true } );
              commit('cart/'+types.STORE_CART_TOTAL, null, { root: true } );
              commit(types.CHECKOUT_LOADED, false);
        });
    },

    showPaymentGateway({commit}) {

        api.wcApi.showPaymentGateway(function(gateway) {

            commit(types.CHECKOUT_PAYMENTS, gateway);

            //console.log(gateway);
            //return gateway;

        })
    },

};

const mutations = {
    [types.CHECKOUT_LOADED](state, val) {
        state.loadedCheckout = val;
    },
    [types.CHECKOUT_PAYMENTS](state, val) {
        state.listPayments = [];
        state.listPayments.push(val);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};