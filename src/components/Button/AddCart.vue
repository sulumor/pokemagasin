<template>
  <div class="addCart">
    <p v-show="pokemon.stock === 0" class="soldOut">Rupture de stock</p>
    <div v-show="pokemon.stock > 0">
      <button v-on:click="addToCart(pokemon)" class="but" type="button">
        <img src="../../assets/add-to-basket.png" />
        <p>Ajouter au panier</p>
      </button>
    </div>
  </div>
</template>

<script>
import store from "../../store";

export default {
  name: "AddCart",
  store: store,
  props: ["pokemon"],
  methods: {
    addToCart(pokemon) {
      this.$store.dispatch("addToCart", pokemon.id);
    },
  },
};
</script>

<style>
.soldOut {
  width: 100%;
  font-size: 25px;
  color: crimson;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  z-index: 2;
}
.but {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 280px;
  height: 50px;
  border-radius: 10px;
  border: 1px rgba(47, 46, 46, 0.45);
  background-color: #ffcb05;
  box-shadow: 0px 10px 20px 10px #ffcd0542;
}
.but img {
  height: 100%;
  padding: 4px;
}
</style>
