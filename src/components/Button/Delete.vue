<template>
  <button
    v-on:click="removeCart(pokemonPanier, id)"
    type="button"
    class="delete"
  >
    <img src="../../assets/delete.png" />
  </button>
</template>
<script>
  import { mapState } from "vuex";

  export default {
    name: "Delete",
    props: ["pokemonPanier", "id"],
    methods: {
      removeCart: function(pokemonPanier, id) {
        this.$delete(this.cart, id);
        pokemonPanier.stock = pokemonPanier.stock + pokemonPanier.quantity;
        this.pokemons[pokemonPanier.id - 1].stock =
          this.pokemons[pokemonPanier.id - 1].stock + pokemonPanier.quantity;
      },
    },
    computed: {
      ...mapState(["pokemons", "cart"]),
    },
  };
</script>
<style>
  .delete {
    width: 40px;
    height: 40px;
    margin: 10px 15px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    padding: 12.5px;
  }
  .delete img {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 900px) {
    .delete {
      height: 25px;
      width: 25px;
      padding: 5px;
    }
    .delete img {
      height: 15px;
      width: 15px;
    }
  }
</style>
