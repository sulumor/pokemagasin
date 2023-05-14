<template>
  <button v-on:click="plusQuantity(pokemonPanier)" type="button" class="plus">
    <img src="../../assets/plus.png" />
  </button>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Plus",
  props: ["pokemonPanier"],
  methods: {
    plusQuantity: function(pokemonPanier) {
      if (this.pokemons[pokemonPanier.id - 1].stock > 0) {
        pokemonPanier.quantity++;
        pokemonPanier.stock--;
        this.pokemons[pokemonPanier.id - 1].stock--;
      }
    },
  },
  computed: {
    ...mapState(["pokemons"]),
  },
};
</script>
<style>
.plus {
  width: 40px;
  height: 40px;
  margin: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 12.5px;
}
.plus img {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 900px) {
  .plus {
    height: 25px;
    width: 25px;
    padding: 5px;
  }

  .plus img {
    height: 15px;
    width: 15px;
  }
}
</style>
