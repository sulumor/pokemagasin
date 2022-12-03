<template>
  <div class="panier-container">
    <div class="cart">
      <retour></retour>
      <h2>Panier</h2>
      <div v-show="cart == ''" class="empty">
        <p>
          - Panier vide -<br /><br /><br />
          Allez vite au
          <router-link to="/" class="magasin">magasin</router-link> pour choisir
          vos pokémons préférés
        </p>
      </div>
      <div class="englobant">
        <div style="flex: 5">
          <div
            v-bind:key="id"
            v-for="(pokemonPanier, id) in cart"
            v-bind:style="{ background: cardColor(pokemonPanier) }"
            class="panier"
          >
            <span class="prix">{{ pokemonPanier.price }} €</span>
            <img
              :src="pokemonPanier.pic"
              :alt="pokemonPanier.name"
              class="pic"
            />
            <div class="btn-container">
              <button v-on:click="plusQuantity(pokemonPanier)" type="button">
                <img src="../assets/plus.png" />
              </button>
              <button
                v-on:click="minusQuantity(pokemonPanier, id)"
                type="button"
              >
                <img src="../assets/minus.png" />
              </button>
            </div>
            <div class="quantity">
              <p class="desktop">
                {{ pokemonPanier.quantity }} {{ pokemonPanier.name
                }}<span v-show="pokemonPanier.quantity > 1">s</span>
              </p>
              <p class="mobile">
                {{ pokemonPanier.quantity }}
              </p>
            </div>
            <p class="desktop">
              Total : {{ pokemonPanier.price * pokemonPanier.quantity }}
              €
            </p>
            <p class="mobile">
              {{ pokemonPanier.price * pokemonPanier.quantity }}
              €
            </p>
            <button
              v-on:click="removeCart(pokemonPanier, id)"
              type="button"
              class="remove"
            >
              <img src="../assets/delete.png" />
            </button>
          </div>
        </div>
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

            <button class="commande" type="button">
              <img src="../assets/pokeball-color.png" alt="pokeball" />Confirmer
              la commande
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Retour from "../components/Button/Retour.vue";

export default {
  name: "Panier",
  components: { Retour },
  methods: {
    plusQuantity: function(pokemonPanier) {
      if (this.pokemons[pokemonPanier.id - 1].stock > 0) {
        pokemonPanier.quantity++;
        pokemonPanier.stock--;
        this.pokemons[pokemonPanier.id - 1].stock--;
      }
    },
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
    removeCart: function(pokemonPanier, id) {
      this.$delete(this.cart, id);
      pokemonPanier.stock = pokemonPanier.stock + pokemonPanier.quantity;
      this.pokemons[pokemonPanier.id - 1].stock =
        this.pokemons[pokemonPanier.id - 1].stock + pokemonPanier.quantity;
    },
    cardColor: function(pokemonPanier) {
      let color = this.types[pokemonPanier.type];
      return color;
    },
  },
  computed: {
    quantityPoke() {
      let quantity = 0;
      for (let i = 0; i < this.cart.length; i++) {
        quantity = quantity + this.cart[i].quantity;
      }
      return quantity;
    },
    amountPoke() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total = total + this.cart[i].quantity * this.cart[i].price;
      }
      return total;
    },
    portPoke() {
      let frais_de_port = 0;
      if (this.quantityPoke < 3) {
        frais_de_port = 25;
      } else if (this.quantityPoke < 5) {
        frais_de_port = 100;
      } else {
        frais_de_port = 200;
      }
      return frais_de_port;
    },

    ...mapState(["pokemons", "cart", "types"]),
  },
};
</script>

<style scoped src="./styles/panier.css"></style>
