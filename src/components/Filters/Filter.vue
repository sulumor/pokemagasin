<template>
  <div class="filter">
    <selection
      v-on:selectPoke="changementListe($event)"
      v-on:change="selectType(filtreType)"
    ></selection>
    <searchbar
      v-show="this.filtreType == ''"
      v-on:searchPoke="recherchePoke($event)"
    ></searchbar>
  </div>
</template>

<script>
import Searchbar from "./Searchbar.vue";
import Selection from "./Selection.vue";

export default {
  name: "Filter",
  components: {
    Searchbar,
    Selection,
  },
  data() {
    return {
      filtreType: "",
      searchPoke: "",
    };
  },
  methods: {
    changementListe(nvFiltre) {
      this.filtreType = nvFiltre;
    },
    recherchePoke(nvPoke) {
      this.searchPoke = nvPoke;
    },
    selectType(param) {
      this.$emit("selectType", param);
    },
  },
};
</script>
<style>
.filter {
  padding-top: 100px;
  display: flex;
}
</style>
