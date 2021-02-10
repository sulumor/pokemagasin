<template>
  <div class="home">
    <choice v-on:filtrePoke="changementListe($event)"></choice>
    <selection v-on:selectPoke="changementListe($event)"></selection>
    <searchbar
      v-show="this.filtreType == ''"
      v-on:searchPoke="recherchePoke($event)"
    ></searchbar>
    <div class="card-container">
      <div
        v-bind:key="id"
        v-for="(pokemon, id) in filtre"
        v-bind:style="{ background: cardColor(pokemon) }"
        class="card"
      >
        <router-link v-bind:to="`/${pokemon.id}/${pokemon.name}`">
          <p class="id" :id="pokemon.id"># {{ pokemon.id }}</p>
          <p v-show="pokemon.stock === 1" class="stock">Dernier dispo</p>
          <img v-bind:src="pokemon.pic1" :alt="pokemon.name" class="picPoke" />
          <div class="namePrice">
            <span class="name">{{ pokemon.name }}</span>
            <span class="price">{{ pokemon.price }} €</span>
          </div>
        </router-link>
        <p v-show="pokemon.stock === 0" class="sold-out">Rupture de stock</p>
        <div v-show="pokemon.stock > 0" class="addCart">
          <button v-on:click="addToCart(pokemon)" type="button">
            <img src="../assets/add-to-basket.png" />
            <p>Ajouter au panier</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from '../store/index'
import Choice from "../components/Choice";
import Selection from "../components/Selection"
import Searchbar from "../components/Searchbar";

export default {
  name: "All",
  store: store,
  components: {
    choice: Choice,
    searchbar: Searchbar,
    selection: Selection,
  },
  data() {
    return {
      filtreType: "",
      searchPoke: "",
    };
  },
  methods: {
    addToCart(pokemon) {
      this.$store.dispatch("addToCart", pokemon.id )
    },
    fetchPokemonComplet(pokemon) {
      if (this.$store.state.pokemons.length < 151) {
        const objPokemon = {};

        axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)

          .then((pokeData) => {
            objPokemon.name = pokeData.data.names[4].name;
            for (let i = 0; i < pokeData.data.flavor_text_entries.length; i++) {
              if (pokeData.data.flavor_text_entries[i].language.name == "fr") {
                objPokemon.description =
                  pokeData.data.flavor_text_entries[i].flavor_text;
              }
            }
          })
          .catch((err) =>{
            console.log(err);
            objPokemon.name = "indefini";
            objPokemon.description = "indisponible suite erreur"
          });
        axios.get(pokemon.url).then((pokeData) => {
          objPokemon.pic1 =
            pokeData.data.sprites.other["official-artwork"].front_default;
          objPokemon.pic2 =
            pokeData.data.sprites.other.dream_world.front_default;
          objPokemon.type = pokeData.data.types[0].type.name;
          objPokemon.id = pokeData.data.id;
          objPokemon.life = pokeData.data.stats[0].base_stat;
          objPokemon.attack = pokeData.data.stats[1].base_stat;
          objPokemon.defense = pokeData.data.stats[2].base_stat;
          objPokemon.speed = pokeData.data.stats[5].base_stat;
          objPokemon.height = pokeData.data.height;
          objPokemon.weight = pokeData.data.weight;
          objPokemon.stock = Math.trunc(Math.random() * 5);
          objPokemon.price = Math.trunc(
            ((objPokemon.life +
              objPokemon.attack +
              objPokemon.defense +
              objPokemon.speed) /
              4) *
              1.5
          );
          

          this.$store.state.pokemons = [
            ...this.$store.state.pokemons,
            objPokemon,
          ];

          if (this.$store.state.pokemons.length == 151) {
            this.$store.state.pokemons.sort((a, b) => {
              return a.id - b.id;
            });
          }
        })
        .catch((err) => {
            console.log(err);
            objPokemon.type = "indefini";
            objPokemon.id = "erreur";
            objPokemon.life = 100;
            objPokemon.attack = 100;
            objPokemon.defense = 100;
            objPokemon.speed = 100;
          });
      }
    },
    cardColor(pokemon) {
      let color = this.$store.state.types[pokemon.type];
      return color;
    },
    changementListe(nvFiltre) {
      this.filtreType = nvFiltre;
    },
    recherchePoke(nvPoke) {
      this.searchPoke = nvPoke;
    },
  },
  computed: {
    filtre() {
      return this.$store.state.pokemons.filter((pokemon) => {
        if (this.searchPoke !== "") {
          return pokemon.name
            .toLowerCase()
            .includes(this.searchPoke.toLowerCase());
        } else {
          return pokemon.type.includes(this.filtreType);
        }
      });
    },
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((allPoke) => {
      allPoke.data.results.forEach((pokemon) => {
        this.fetchPokemonComplet(pokemon);
      });
    });
  },
};

</script>
<style scoped src="./styles/home.css"></style>
