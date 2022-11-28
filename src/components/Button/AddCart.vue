<template>
  <div class="addCart">
    <p v-show="pokemon.stock === 0" class="sold-out">Rupture de stock</p>
    <div v-show="pokemon.stock > 0" class="but">
      <button v-on:click="addToCart(pokemon)" type="button">
        <img src="../../assets/add-to-basket.png" />
        <p>Ajouter au panier</p>
      </button>
    </div>
  </div>
</template>

<script>
import store from "../../store";

//revoir tous le bouton pour l'intégrer à plusieur endroit
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
.sold-out {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  font-size: 25px;
  color: crimson;
  transform: translateX(-50%);
  line-height: 30px;
  font-weight: 800;
  text-align: center;
  z-index: 2;
}
.addCart {
  width: 100%;
  height: 35px;
}

.but {
  height: 100%;
}
.but button {
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(to top, #f1f1f1, transparent);
  height: 100%;
  width: 100%;
  transition: opacity 0.5s ease;
  cursor: pointer;
}
.but button img {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
/* .card:hover .but button {
  opacity: 1;
}*/

@media screen and (max-width: 800px) {
  .sold-out {
    font-size: 20px;
    line-height: 25px;
  }
  .but button {
    opacity: 1;
  }
}
@media screen and (max-width: 550px) {
  .sold-out {
    font-size: 13px;
    line-height: 15px;
  }
  .addCart {
    height: 25px;
  }
  .but button p {
    display: none;
  }
  .but button img {
    width: 20px;
    height: 20px;
  }
}
</style>
