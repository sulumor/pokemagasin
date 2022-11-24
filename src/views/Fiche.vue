<template>
  <div class="sheet-container">
    <retour></retour>
    <h2>Fiche Pokémons</h2>
    <fullCard
      v-on:changementId="newId($event)"
      v-bind:pokemon="pokemons[this.id - 1]"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";
import Retour from "../components/Button/Retour.vue";
import FullCard from "../components/Pokemon/FullCard.vue";

//voir pour faire du trie
//voir sur comment mieux diffuser les infos dans les enfants

export default {
  components: { Retour, FullCard },
  store: store,
  name: "Fiche",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    newId(i) {
      this.id = i;
    },
  },
  computed: {
    ...mapState(["pokemons", "cart", "types"]),
  },
};
</script>

<style scoped src="./styles/fiche.css"></style>
