import _ from "lodash";
import axios from "axios";
import SETTINGS from "../settings";
import WooCommerceAPI from "woocommerce-api";


// const alex = {
//     // Test my api
//     getAPage(cb) { //cb = function(pages) { commit(types.STORE_FETCHED_PAGES, { pages }); };
//         axios
//             .get(SETTINGS.API_BASE_PATH + "pages?per_page=5")
//             .then(response => {
//                 cb(response.data);
//                 console.log(response.data);
//             })
//             .catch(e => {
//                 cb(e);
//             });
//
//     },
//     // Get products WC
//     getListProducts(cb) {
//         new WooCommerceAPI({
//             url: SETTINGS.WC.URL_RESOURSE,
//             consumerKey: SETTINGS.WC.CONSUMERKEY,
//             consumerSecret: SETTINGS.WC.CONSUMERSECRET,
//             wpAPI: true,
//             version: 'wc/v3'
//         }).getAsync('products').then(function(response) {
//             cb(JSON.parse(response.toJSON().body));
//         });
//
//     },
// };

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
                //console.log(response.data);
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
        url: SETTINGS.WC.URL_RESOURSE,
        consumerKey: SETTINGS.WC.CONSUMERKEY,
        consumerSecret: SETTINGS.WC.CONSUMERSECRET,
        wpAPI: true,
        version: 'wc/v3'
    }).getAsync('products').then(function(response) {
        cb(JSON.parse(response.toJSON().body));
    })}

};

export default {
  pagesApi,
  postsApi,
  categoriesAPI,
  wcApi

};
