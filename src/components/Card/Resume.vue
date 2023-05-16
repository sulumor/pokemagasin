<template>
  <div v-show="cart != ''" class="resumeCart">
    <div class="overlay">
      <h4>Aperçu de votre commande</h4>
      <div class="line">
        <p>Nombre pokémon<span v-show="quantityPoke > 1">s</span>:</p>
        <p>{{ quantityPoke }}</p>
      </div>
      <div class="line">
        <p>Sous-total:</p>
        <p>{{ amountPoke }} €</p>
      </div>
      <div class="line">
        <p>Frais de port :</p>
        <p>{{ portPoke }} €</p>
      </div>
      <div class="line">
        <p>Total:</p>
        <p>{{ amountPoke + portPoke }} €</p>
      </div>
      <validation />
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import Validation from "../Button/Validation.vue";

  export default {
    name: "Resume",
    components: { Validation },
    computed: {
      quantityPoke() {
        let quantity = 0;
        for (let i = 0; i < this.cart.length; i++) {
          quantity += this.cart[i].quantity;
        }
        return quantity;
      },
      amountPoke() {
        let total = 0;
        for (let i = 0; i < this.cart.length; i++) {
          total += this.cart[i].quantity * this.cart[i].price;
        }
        return total;
      },
      portPoke() {
        return this.quantityPoke < 3 ? 25 : this.quantityPoke < 5 ? 100 : 200;
      },
      ...mapState(["cart"]),
    },
  };
</script>
<style>
  .resumeCart {
    flex: 3;
    background-image: url("../../assets/fond.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid #333;
    box-shadow: 3px 3px 10px 5px rgba(255, 255, 255, 0.2);
    margin: 10px;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
  .overlay h4 {
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 5px;
    color: #ffcb05;
  }
  .overlay p {
    padding: 10px;
  }
  .overlay p,
  .overlay span {
    font-size: 22px;

    color: #ffcb05;
  }
  .line {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
