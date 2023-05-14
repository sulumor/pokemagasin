<template>
  <div id="app">
    <loading v-show="this.$store.state.pokemons.length !== 151"></loading>
    <nav-top v-show="this.$store.state.pokemons.length == 151"></nav-top>
    <router-view
      v-show="this.$store.state.pokemons.length == 151"
    ></router-view>
  </div>
</template>

<script>
import store from "./store/index.js";
import Nav from "./components/Nav";
import Loading from "./components/Loading";

export default {
  name: "App",
  store: store,
  components: {
    "nav-top": Nav,
    loading: Loading,
  },
};
</script>

<style src="./styles/reset.css" />
