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

           //console.log(cart);
           //console.log(_.findIndex(obj.cart, { product_id : 230 }));


            // var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
            //     {'id': 2, 'name': 'Ted', 'last': 'White'},
            //     {'id': 3, 'name': 'Frank', 'last': 'James'},
            //     {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
            // console.log(_.findIndex(users, { name: 'Ted'}));



           // cart.find(function(element, index, array) {
           //      return console.log('Push' + element);
           // });

             //console.log(cart);
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

        console.log(cart.product_id);

        if(_.findIndex(state.cart, { product_id: cart.product_id}) === -1) {
            state.cart.push(cart);
            console.log('Push...');
        }
        else { //Проверить инкремент количества товара!!!
            let ob = state.cart[_.findIndex(state.cart, { product_id: cart.product_id})];
            ob.quantity = Number(ob.quantity) + Number(cart.quantity);
            console.log('Increment...');

            let suma = Number(ob.quantity) + Number(cart.quantity);
            console.log(suma);
        }

        console.log(state.cart);
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