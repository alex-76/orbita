import api from "../../api";
import _ from "lodash";
import * as types from "../mutation-types";



const state = {
    notes: [],
    name:''
};

const actions = {
    addName({commit}, name) {
        commit('ADD_NAME', name);
    },
    addNote({commit}, note) {
        commit('ADD_NOTE', note);
    }
};

const mutations = {
    ADD_NAME(state, name) {
        state.name = name;
    },
    ADD_NOTE(state, note) {
        state.notes =  note;
    }
};

const getters = {
    name(state) {
        return state.name;
    },
    notes(state) {
        return state.notes;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};