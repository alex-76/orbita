import api from "../../api";

const namespaced = {
    namespaced: true
};

const state = {
    notes: ['Goga fun'],
    name: 'Lola',
    goman: 'Go to home...',
    hooks:[],
    listprod:{}
};

const actions = {
    addNameY: ({ commit }, name) => commit('ADD_NAME', name),

    addName({commit}, name) {
        commit('ADD_NAME', name);
    },

    addNote({commit}, note) {
        commit('ADD_NOTE', note);
    },

    //getAPages: ({ commit }, data) => commit('ADD_MY_PAGE', data)

    getAPages({ commit }) {
        api.alex.getAPage( pages => {

            //     var heroes = [
            //     {name: “Batman”, franchise: “DC”},
            //     {name: “Ironman”, franchise: “Marvel”},
            //     {name: “Thor”, franchise: “Marvel”},
            //     {name: “Superman”, franchise: “DC”}
            //     ];
            //
            //     var marvelHeroes =  heroes.filter(function(hero) {
            //         return hero.franchise == 'Marvel';
            //     });

            let cont = pages.filter( (s) => s.id === 184 );

            commit('ADD_MY_PAGE', { cont });
        });
    },

    getProducts({ commit}) {

        api.alex.getListProducts( data => {

            commit('ADD_PRODUCTS', { data });

        });
    }
};

const mutations = {
    ADD_NAME(state, name) {
        state.name = name;
    },
    ADD_NOTE(state, note) {
        state.notes.push(note);
    },
    ADD_MY_PAGE(state, data) {
        state.hooks.push(data);
    },
    ADD_PRODUCTS(state, data) {
        state.listprod = data;
        //console.log(state.listprod);
    }
};

const getters = {
    name(state) {
        return state.name;
    },
    notes(state) {
        return state.notes;
    },
    getHooks(state) {
        return state.hooks;
    },
    getMyProducts(state) {
        return state.listprod;
    },
    getGo(state) {
        return state.goman;
    }

};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
};