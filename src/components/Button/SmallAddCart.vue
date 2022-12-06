<template>
  <div class="smallAddCart">
    <p v-show="pokemon.stock === 0" class="sold-out">Rupture de stock</p>
    <div v-show="pokemon.stock > 0">
      <button v-on:click="addToCart(pokemon)" class="smallBut" type="button">
        <img src="../../assets/add-to-basket.png" />
        <p>Ajouter au panier</p>
      </button>
    </div>
  </div>
</template>

<script>
import store from "../../store";

export default {
  name: "SmallAddCart",
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
.smallAddCart {
  width: 100%;
}
.sold-out {
  width: 100%;
  font-size: 1.25rem;
  color: #585353ba;
  line-height: 1.2rem;
  font-weight: bold;
  text-align: center;
  z-index: 2;
}
.smallBut {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 25px;
  border-radius: 10px;
  border: 1px rgba(47, 46, 46, 0.45);
  background-color: #ffcb05;
  box-shadow: 2px 2px 2px #585353ba;
  margin: 4px auto;
}
.smallBut img {
  height: 100%;
  padding: 2px;
}

.smallBut p {
  font-size: 0.7rem;
}
</style>
