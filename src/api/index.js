import _ from "lodash";
import axios from "axios";
import SETTINGS from "../settings";
import WooCommerceAPI from "woocommerce-api";

// API Pages
const pagesApi = {

    getPages(cb) {
        axios
            .get(SETTINGS.API_BASE_PATH + "pages?per_page=10")
            .then(response => {
                cb(response.data);
            })
            .catch(e => {
                cb(e);
            });
    },

    getPage(id, cb) {
        if (_.isNull(id) || !_.isNumber(id)) return false;
        axios
            .get(SETTINGS.API_BASE_PATH + "pages/" + id)
            .then(response => {
                cb(response.data);
            })
            .catch(e => {
                cb(e);
            });
    },

};

// API Posts
const postsApi = {

    getPosts(limit, cb) {

        if (_.isEmpty(limit)) {
            let limit = 5;
        }

        axios
            .get(SETTINGS.API_BASE_PATH + "posts?per_page=" + limit)
            .then(response => {
                cb(response.data);
            })
            .catch(e => {
                cb(e);
            });
    },
};

// API Categories
const categoriesAPI = {

    getCategories(cb) {
        axios
            .get(
                SETTINGS.API_BASE_PATH +
                "categories?sort=name&hide_empty=true&per_page=50"
            )
            .then(response => {
                cb(response.data.filter(c => c.name !== "Uncategorized"));
            })
            .catch(e => {
                cb(e);
            });
    },
};

// API Woocomerce
const wcApi = {

    // Get all products
    getProducts(cb) {
        new WooCommerceAPI({
            url: SETTINGS.URL_RESOURSE,
            consumerKey: SETTINGS.WC.CONSUMERKEY,
            consumerSecret: SETTINGS.WC.CONSUMERSECRET,
            wpAPI: true,
            version: 'wc/v3'
        }).getAsync('products').then(function(response) {
            cb(JSON.parse(response.toJSON().body));
    })},

    // Get one product
    getProduct(id, cb) {
        new WooCommerceAPI({
            url: SETTINGS.URL_RESOURSE,
            consumerKey: SETTINGS.WC.CONSUMERKEY,
            consumerSecret: SETTINGS.WC.CONSUMERSECRET,
            wpAPI: true,
            version: 'wc/v3'
        }).getAsync('products/' + id).then(function(response) {
            cb(JSON.parse(response.toJSON().body));
        })
    },

    // Create Order
    createOrder(data, cb) {
        new WooCommerceAPI({
            url: SETTINGS.URL_RESOURSE,
            consumerKey: SETTINGS.WC.CONSUMERKEY,
            consumerSecret: SETTINGS.WC.CONSUMERSECRET,
            wpAPI: true,
            version: 'wc/v3'
        }).post('orders/', data, function(err, data, res){
            cb(data);
        })
    },

    // Get Cart Products
    getCartContent() {
        axios.get(SETTINGS.URL_RESOURSE+'/wp-json/wc/v2/cart/').
        then(response => {
            console.log(response.data);
        }).
        catch((error) => {
            console.log(error);
        });

    },

    // Add Products to Cart
    addCart(id, q, cb) {
        const data ={"product_id": id, "quantity": q};
        axios.post(SETTINGS.URL_RESOURSE+'/wp-json/wc/v2/cart/add', data).
            then(response => {
            cb(response.data);
        }).
        catch((error) => {
            console.log(error);
        });
    },

    // Clear Cart
    clearCart(cb){
        axios.post(SETTINGS.URL_RESOURSE+'/wp-json/wc/v2/cart/clear').
        then(response => {
            cb(response.data);
        }).
        catch((error) => {
            console.log(error);
        });
    },

    // Remove Item from Cart
    removeItemCart(cart_item_key, cb){
        axios.delete(SETTINGS.URL_RESOURSE+'/wp-json/wc/v2/cart/cart-item', { data: { "cart_item_key":cart_item_key }}).
        then(response => {
            cb(response.data);
        }).
        catch((error) => {
            console.log(error);
        });
    },

    // Get Cart Totals
    getCartTotals(cb) {
        axios.get(SETTINGS.URL_RESOURSE+'/wp-json/wc/v2/cart/totals').
        then(response => {
            cb(response.data);
        }).
        catch((error) => {
            console.log(error);
        });
    }
};

export default {
  pagesApi,
  postsApi,
  categoriesAPI,
  wcApi

};
