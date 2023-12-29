<template>
  <div
    class="ligne"
    :style="{ background: this.$store.state.types[pokemonPanier.type] }"
  >
    <span class="prix">{{ pokemonPanier.price }} €</span>
    <img :src="pokemonPanier.pic" :alt="pokemonPanier.name" class="pic" />
    <div class="btn-container">
      <plus
        :pokemonPanier="pokemonPanier"
        v-show="pokemons[pokemonPanier.id - 1].stock > 0"
      />
      <soldOut v-show="pokemons[pokemonPanier.id - 1].stock == 0" />
      <minus v-bind:pokemonPanier="pokemonPanier" v-bind:id="id" />
    </div>
    <div class="quantity">
      <p class="desktop">
        {{ pokemonPanier.quantity }} {{ pokemonPanier.name }}<span v-show="pokemonPanier.quantity > 1">s</span>
      </p>
      <p class="mobile"></p>
    </div>
    <p class="desktop">
      Total : {{ pokemonPanier.price * pokemonPanier.quantity }}
      €
    </p>
    <p class="mobile">
      {{ pokemonPanier.price * pokemonPanier.quantity }}
      €
    </p>
    <delete :pokemonPanier="pokemonPanier" :id="id" />
  </div>
</template>
<script>
  import Plus from "../Button/Plus.vue";
  import SoldOut from "../Text/SoldOut.vue";
  import Minus from "../Button/Minus.vue";
  import Delete from "../Button/Delete.vue";
  import { mapState } from "vuex";

  export default {
    name: "Cart",
    components: { Plus, SoldOut, Minus, Delete },
    props: ["pokemonPanier", "id"],
    computed: {
      ...mapState(["pokemons"]),
    },
  };
</script>
<style>
  .ligne {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #333;
    box-shadow: 3px 3px 10px 5px rgba(255, 255, 255, 0.2);
  }
  .prix {
    position: absolute;
    top: 10px;
    left: -5px;
    transform: rotate(-45deg);
    padding: 2px 10px;
    background: rgba(0, 0, 0, 0.2);
    color: #ffcb05;
    border-radius: 999999px;
  }
  .pic {
    width: 100px;
    height: 100px;
    margin: 15px;
    flex: 1;
  }
  .ligne p,
  .ligne span,
  .desktop,
  .desktop span,
  .mobile {
    flex: 1;
    font-size: 25px;
    font-weight: 600;
    color: #3b5ba7;
    word-wrap: break-word;
    text-align: center;
    line-height: 35px;
  }
  .quantity {
    flex: 1;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .btn-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .mobile {
    display: none;
  }
  @media screen and(max-width:1250px) {
    .quantity button {
      margin: 0 3px;
    }
    .ligne p,
    .ligne span,
    .desktop,
    .desktop span {
      font-size: 20px;
    }
  }

  @media screen and(max-width: 900px) {
    .pic {
      width: 60px;
      height: 60px;
    }
    .ligne p,
    .ligne span,
    .desktop,
    .desktop span {
      font-size: 18px;
    }
  }
  @media screen and(max-width: 650px) {
    .ligne p,
    .ligne span,
    .desktop,
    .mobile p {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 450px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
</style>
