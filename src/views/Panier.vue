<template>
  <div class="panier-container">
    <div class="cart">
      <retour />
      <h2>Panier</h2>
      <empty-cart v-show="cart == ''" />
      <div class="englobant">
        <div style="flex: 5">
          <div :key="id" v-for="(pokemonPanier, id) in cart" class="panier">
            <cart :pokemonPanier="pokemonPanier" :id="id" />
          </div>
        </div>
        <resume />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import Retour from "../components/Button/Retour.vue";
  import EmptyCart from "../components/Text/EmptyCart.vue";
  import Cart from "../components/Card/Cart.vue";
  import Resume from "../components/Card/Resume.vue";

  export default {
    name: "Panier",
    components: { Retour, EmptyCart, Cart, Resume },
    computed: {
      ...mapState(["cart"]),
    },
  };
</script>

<style>
  .panier-container {
    padding-top: 100px;
    width: 100%;
  }
  .cart {
    position: relative;
    width: 90%;
    height: 90%;
    margin: 0 auto;
    border: 1px solid #333;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.4);
  }
  .cart h2 {
    font-size: 60px;
    text-align: center;
    color: #ffcb05;
  }
  .englobant {
    display: flex;
  }
  .panier {
    margin: 10px;
  }

  .back {
    top: 15px;
  }

  @media screen and (max-width: 900px) {
    .cart h2 {
      font-size: 45px;
    }
    .englobant {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 650px) {
    .back {
      top: -40px;
    }
    .cart h2 {
      font-size: 40px;
    }
  }
</style>
