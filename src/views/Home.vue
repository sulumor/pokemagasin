<template>
  <div class="home" href="top">
    <choice v-on:filtrePoke="changementListe($event)"></choice>
    <selection v-on:selectPoke="changementListe($event)"></selection>
    <searchbar
      v-show="this.filtreType == ''"
      v-on:searchPoke="recherchePoke($event)"
    ></searchbar>
    <div class="card-container">
      <div v-bind:key="id" v-for="(pokemon, id) in filtre">
        <smallCard v-bind:pokemon="pokemon" />
      </div>
    </div>
    <topButton />
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/index";
import Choice from "../components/Choice";
import Selection from "../components/Selection";
import Searchbar from "../components/Searchbar";
import SmallCard from "../components/Pokemon/SmallCard.vue";
import Top from "../components/Button/Top.vue";

export default {
  name: "All",
  store: store,
  components: {
    choice: Choice,
    searchbar: Searchbar,
    selection: Selection,
    smallCard: SmallCard,
    topButton: Top,
  },
  data() {
    return {
      filtreType: "",
      searchPoke: "",
    };
  },
  methods: {
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
          .catch((err) => {
            console.log(err);
            objPokemon.name = "Nom indéfini";
            objPokemon.description =
              "Description indisponible suite erreur de chargement - réessayer plus tard";
          });
        axios
          .get(pokemon.url)
          .then((pokeData) => {
            objPokemon.pic = [
              pokeData.data.sprites.other["official-artwork"].front_default,
              pokeData.data.sprites.other.dream_world.front_default,
              pokeData.data.sprites.other.home.front_default,
              pokeData.data.sprites.front_default,
            ];
            objPokemon.type = pokeData.data.types[0].type.name;
            objPokemon.id = pokeData.data.id;
            objPokemon.life = pokeData.data.stats[0].base_stat;
            objPokemon.attack = pokeData.data.stats[1].base_stat;
            objPokemon.defense = pokeData.data.stats[2].base_stat;
            objPokemon.speed = pokeData.data.stats[5].base_stat;
            objPokemon.height = pokeData.data.height;
            objPokemon.weight = pokeData.data.weight;
            objPokemon.stock = Math.trunc(Math.random() * 5);
            objPokemon.price = Math.round(
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

            this.$store.state.pokemons.sort((a, b) => {
              return a.id - b.id;
            });
          })
          .catch((err) => {
            console.log(err);
            objPokemon.type = "undefined";
            objPokemon.id = "404";
            objPokemon.life = "Err";
            objPokemon.attack = "Err";
            objPokemon.defense = "Err";
            objPokemon.speed = "Err";
            objPokemon.height = "Err";
            objPokemon.weight = "Err";
            objPokemon.stock = 0;
            objPokemon.price = "Err";

            this.$store.state.pokemons = [
              ...this.$store.state.pokemons,
              objPokemon,
            ];

            this.$store.state.pokemons.sort((a, b) => {
              return a.id - b.id;
            });
          });
      }
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
<style>
.card-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
  padding-top: 15px;
}

@media screen and (max-width: 550px) {
  .card-container {
    padding: 0;
  }
}
</style>
