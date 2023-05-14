<template>
  <div class="searchbar">
    <label for="search">Rechercher votre Pokémon ...</label>
    <input
      v-on:input="searchPoke(searchInp)"
      v-model="searchInp"
      type="search"
    />
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      searchInp: "",
    };
  },
  methods: {
    searchPoke: function(searchInp) {
      this.$emit("searchPoke", searchInp);
      const inp = document.querySelector(".searchbar");
      if (this.searchInp !== "") {
        inp.classList.add("active");
      } else {
        inp.classList.remove("active");
      }
    },
  },
};
</script>

<style>
.searchbar {
  width: 40vw;
  position: relative;
  padding: 15px;
}
.searchbar label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 35px;
  pointer-events: none;
  transition: all 0.8s ease-in-out;
}

.searchbar input {
  padding: 12px 10px;
  width: 100%;
  border-radius: 9999999999px;
  border: 2px solid #3b5ba7;
  font-weight: 600;
  outline: none;
}
.searchbar:focus-within label,
.searchbar.active label {
  display: none;
}
@media screen and (max-width: 800px) {
  .searchbar label {
    font-size: 14px;
  }
  .searchbar input {
    width: 60%;
  }
}
@media screen and (max-width: 550px) {
  .searchbar label {
    font-size: 12px;
  }
  .searchbar input {
    width: 100%;
  }
}
</style>
