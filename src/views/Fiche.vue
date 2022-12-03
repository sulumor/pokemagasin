<template>
  <div>
    <div class="sheet-container">
      <fullCard
        v-on:changementId="newId($event)"
        v-bind:pokemon="pokemons[this.id - 1]"
      />
    </div>
    <div class="button-container">
      <leftbtn v-bind:id="this.id" v-on:pokePrecedent="changementId($event)" />
      <rightbtn v-bind:id="this.id" v-on:pokeSuivant="changementId($event)" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";
import FullCard from "../components/Pokemon/FullCard.vue";
import Right from "../components/Button/Right.vue";
import Left from "../components/Button/Left.vue";

export default {
  components: { FullCard, leftbtn: Left, rightbtn: Right },
  store: store,
  name: "Fiche",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    changementId(nvId) {
      this.id = nvId;
      this.$emit("changementId", this.id);
    },
    newId(i) {
      this.id = i;
    },
  },
  computed: {
    ...mapState(["pokemons", "cart", "types"]),
  },
};
</script>

<style>
.sheet-container {
  padding-top: 80px;
}

.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 5vh;
}
</style>
