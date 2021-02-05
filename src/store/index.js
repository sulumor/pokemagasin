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
  mutations: {
    INCREASE_CART(state, id){
      
      state.cart.push({
        id: this.state.pokemons[id-1].id,
        pic: this.state.pokemons[id-1].pic2,
        name: this.state.pokemons[id-1].name,
        price: this.state.pokemons[id-1].price,
        stock: this.state.pokemons[id-1].stock-- -1,
        type: this.state.pokemons[id-1].type,
        quantity: 1
      });
    }
  },
  actions: {
    addToCart({commit}, id){
      // voir si un pokemon est déjà dans le panier, si oui incrementer la quantité
      for(let i = 0; i < this.state.cart.length; i++){
        if(this.state.cart[i].id === this.state.pokemons[id - 1].id){
          return(
            this.state.cart[i].quantity++,
            this.state.cart[i].stock--,
            this.state.pokemons[id - 1].stock--
          );
        }
      }

      // mettre le pokemon dans panier
      commit('INCREASE_CART', id)

      // classer dans l'ordre d'id dans panier
      if(this.state.cart.length > 1){
        this.state.cart.sort((a, b) =>{
          return a.id - b.id;
        })
      }
    }
  },
  modules: {},
});
