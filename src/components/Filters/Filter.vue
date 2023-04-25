<template>
  <div class="filter">
    <selection v-on:selectPoke="changementListe($event)"></selection>
    <searchbar v-on:searchPoke="recherchePoke($event)"></searchbar>
  </div>
</template>

<script>
import Searchbar from "./Searchbar.vue";
import Selection from "./Select.vue";

export default {
  name: "Filter",
  components: {
    Searchbar,
    Selection,
  },
  data() {
    return {
      filtre: [],
    };
  },
  methods: {
    changementListe(nvFiltre) {
      this.filtre[0] = nvFiltre;
      this.selection(this.filtre);
    },
    recherchePoke(nvPoke) {
      this.filtre = ["", nvPoke];
      this.selection(this.filtre);
    },
    selection(param) {
      this.$emit("selection", param);
    },
  },
};
</script>
<style>
.filter {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
