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
    searchPoke: function (searchInp) {
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

<style scoped>
.searchbar {
  width: 100%;
  position: relative;
  padding: 15px;
}
.searchbar label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 35px;
  font-family: "Chakra Petch", sans-serif;
  pointer-events: none;
  transition: all 0.8s ease-in-out;
}

.searchbar input {
  width: 40%;
  padding: 10px 20px;
  font-size: 20px;
  letter-spacing: 1.5px;
  outline: none;
  border-radius: 9999999999px;
  border: 2px solid #3b5ba7;
  color: #ffcb05;
}
.searchbar:focus-within label,
.searchbar.active label {
  transform: translate(40vw, -50%);
  color: #ffcb05;
  font-size: 30px;
}
@media screen and (max-width: 800px) {
  .searchbar label {
    font-size: 14px;
  }
  .searchbar input {
    width: 60%;
  }
  .searchbar:focus-within label,
  .searchbar.active label {
    display: none;
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