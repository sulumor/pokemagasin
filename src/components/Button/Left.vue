<template>
  <div class="left">
    <button v-on:click="pokePrecedent">
      <router-link
        v-if="this.id > 1"
        :to="`/${pokemons[this.id - 2].id}/${pokemons[this.id - 2].name}`"
      >
        <p># {{ pokemons[this.id - 2].id }} {{ pokemons[this.id - 2].name }}</p>
        <img src="../../assets/next.png" alt="flèche gauche" />
      </router-link>
      <router-link v-else :to="`/${pokemons[150].id}/${pokemons[150].name}`">
        <p># 151 {{ pokemons[150].name }}</p>
        <img src="../../assets/next.png" alt="flèche gauche" />
      </router-link>
    </button>
  </div>
</template>
<script>
  import { mapState } from "vuex";

  export default {
    name: "left",
    props: ["id"],
    methods: {
      pokePrecedent() {
        let idPrecedent = parseInt(this.id);
        idPrecedent === 1 ? (idPrecedent = 151) : idPrecedent--;
        this.$emit("pokePrecedent", idPrecedent);
      },
    },
    computed: {
      ...mapState(["pokemons"]),
    },
  };
</script>

<style>
  .left {
    width: 45%;
    height: 100%;
  }
  .left button {
    width: 100%;
    height: 100%;
    border: 3px solid #3b5ba7;
    border-radius: 45px;
    background: transparent;
  }
  .left a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  .left p {
    font-size: 16px;
    color: #ffcb05;
  }

  .left img {
    height: 100%;
    transform: rotate(180deg);
  }
</style>
