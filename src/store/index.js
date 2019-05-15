import Vue from 'vue'
import Vuex from 'vuex'
import createPersist from 'vuex-localstorage'
import * as actions from './actions'
import * as getters from './getters'
import post from './modules/post'
import page from './modules/page'
import shop from './modules/shop'
import product from './modules/product'
import cart from './modules/cart'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

let localStorage = createPersist({
    namespace: 'APP_WHA',
    initialState: {},
    expires: 640000 // 7 days
});

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    post,
    page,
    shop,
    product,
    cart
  },
  strict: debug,
  plugins: [localStorage]
})
