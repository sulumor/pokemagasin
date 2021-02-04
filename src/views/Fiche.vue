<template>
  <div>
    <div class="sheet-container">
      <retour></retour>
      <h2>Fiche Pokémons</h2>
      <div
        v-bind:style="{
          background: cardColor(pokemons[this.id - 1]),
        }"
        class="sheet"
      >
        <p class="titre"># {{ this.id }} {{ pokemons[this.id - 1].name }}</p>
        <div class="infos">
          <div class="pic">
            <img :src="pokemons[this.id - 1].pic2" alt="" />
            <p>{{ pokemons[this.id - 1].description }}</p>
          </div>
          <div class="dimension">
            <p>
              Taille :
              {{ pokemons[this.id - 1].height / 10 }} m
            </p>
            <p>
              Poids :
              {{ pokemons[this.id - 1].weight / 10 }} kg
            </p>
            <p>Vie : {{ pokemons[this.id - 1].life }}</p>
            <p>Attaque : {{ pokemons[this.id - 1].attack }}</p>
            <p>Defense : {{ pokemons[this.id - 1].defense }}</p>
            <p>Vitesse : {{ pokemons[this.id - 1].speed }}</p>
            <div class="achat">
              <button
                v-show="pokemons[this.id - 1].stock > 0"
                v-on:click="addToCart('pokemons[this.id - 1]')"
                type="button"
                class="panier"
              >
                <img src="..\assets\add-to-basket.svg" />
                Ajouter au panier
              </button>
              <button
                v-show="pokemons[this.id - 1].stock == 0"
                type="button"
                class="sold_out"
              >
                <span>Rupture de stock</span>
              </button>
            </div>
          </div>
          <span class="price">{{ pokemons[this.id - 1].price }} €</span>
        </div>
        <div class="right">
          <button v-on:click="pokeSuivant">
            <router-link
              v-if="this.id < 151"
              :to="`/${pokemons[this.id].id}/${pokemons[this.id].name}`"
            >
              <img src="../assets/next.svg" alt="" />
              <p>{{ pokemons[this.id].name }}</p></router-link
            >
            <router-link v-else :to="`/${pokemons[0].id}/${pokemons[0].name}`"
              ><img src="../assets/next.svg" alt="" />
              <p>{{ pokemons[0].name }}</p>
            </router-link>
          </button>
        </div>
        <div class="left">
          <button v-on:click="pokePrecedent">
            <router-link
              v-if="this.id > 1"
              :to="`/${pokemons[this.id - 2].id}/${pokemons[this.id - 2].name}`"
            >
              <img src="../assets/next.svg" alt="" />
              <p>{{ pokemons[this.id - 2].name }}</p>
            </router-link>
            <router-link
              v-else
              :to="`/${pokemons[150].id}/${pokemons[150].name}`"
              ><img src="../assets/next.svg" alt="" />
              <p>{{ pokemons[150].name }}</p>
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Retour from "../components/Retour";

export default {
  components: { Retour },
  name: "Fiche",
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
    };
  },
  methods: {
    cardColor: function (poke) {
      let color = this.types[poke.type];
      return color;
    },
    addToCart: function (pokemon) {
      pokemon;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === this.pokemons[this.id - 1].id) {
          return (
            this.cart[i].quantity++,
            this.cart[i].stock--,
            this.pokemons[this.cart[i].id - 1].stock--
          );
        }
      }

      this.cart.push({
        id: this.pokemons[this.id - 1].id,
        pic: this.pokemons[this.id - 1].pic2,
        name: this.pokemons[this.id - 1].name,
        price: this.pokemons[this.id - 1].price,
        stock: this.pokemons[this.id - 1].stock-- - 1,
        type: this.pokemons[this.id - 1].type,
        quantity: 1,
      });

      this.cart.stock--;

      if (this.cart.length > 1) {
        this.cart.sort((a, b) => {
          return a.id - b.id;
        });
      }
    },
    pokeSuivant: function () {
      this.id = parseInt(this.id);
      if (this.id === 151) this.id = 1;
      else this.id = this.id + 1;
    },
    pokePrecedent: function () {
      this.id = parseInt(this.id);
      if (this.id === 1) this.id = 151;
      else this.id = this.id - 1;
    },
  },
  computed: {
    ...mapState(["pokemons", "cart", "types"]),
  },
};
</script>

<style scoped src="./styles/fiche.css">
</style>