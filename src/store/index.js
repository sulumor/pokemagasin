import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    pokemons: [],
    types: {
      grass: "#78c850",
      ground: "#e2bf65",
      dragon: "#6f35fc",
      fire: "#f58271",
      electric: "#f7d02c",
      fairy: "#d685ad",
      poison: "#966da3",
      bug: "#b3f594",
      water: "#6390f0",
      normal: "#d9d5d9",
      psychic: "#f95587",
      flying: "#a98ff3",
      fighting: "#c25956",
      rock: "#b6a136",
      ghost: "#735797",
      ice: "#96d9d6",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
