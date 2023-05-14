<template>
  <button
    v-on:click="minusQuantity(pokemonPanier, id)"
    type="button"
    class="minus"
  >
    <img src="../../assets/minus.png" />
  </button>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Minus",
  props: ["pokemonPanier", "id"],
  methods: {
    minusQuantity: function(pokemonPanier, id) {
      if (pokemonPanier.quantity === 1) {
        this.$delete(this.cart, id);
        pokemonPanier.stock++;
        this.pokemons[pokemonPanier.id - 1].stock++;
      } else {
        pokemonPanier.quantity--;
        pokemonPanier.stock++;
        this.pokemons[pokemonPanier.id - 1].stock++;
      }
    },
  },
  computed: {
    ...mapState(["pokemons", "cart"]),
  },
};
</script>
<style>
.minus {
  width: 40px;
  height: 40px;
  margin: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 12.5px;
}
.minus img {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 900px) {
  .minus {
    height: 25px;
    width: 25px;
    padding: 5px;
  }
  .minus img {
    height: 15px;
    width: 15px;
  }
}
</style>
