<template>
  <div class="right">
    <button v-on:click="pokeSuivant">
      <router-link
        v-if="this.id < 151"
        :to="`/${pokemons[this.id].id}/${pokemons[this.id].name}`"
      >
        <img src="../../assets/next.png" alt="flèche droite" />
        <p>
          # {{ pokemons[this.id].id }} {{ pokemons[this.id].name }}
        </p></router-link
      >
      <router-link v-else :to="`/${pokemons[0].id}/${pokemons[0].name}`"
        ><img src="../../assets/next.png" alt="flèche droite" />
        <p># 1 {{ pokemons[0].name }}</p>
      </router-link>
    </button>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  //refaire tous le css
  export default {
    name: "right",
    props: ["id"],
    methods: {
      pokeSuivant() {
        let idSuivant = parseInt(this.id);
        idSuivant === 151 ? (idSuivant = 1) : idSuivant++;
        this.$emit("pokeSuivant", idSuivant);
      },
    },
    computed: {
      ...mapState(["pokemons"]),
    },
  };
</script>

<style>
  .right {
    width: 45%;
    height: 100%;
  }
  .right button {
    width: 100%;
    height: 100%;
    border: 3px solid #3b5ba7;
    border-radius: 45px;
    background: transparent;
  }
  .right a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  .right p {
    font-size: 16px;
    color: #ffcb05;
  }

  .right img {
    height: 100%;
  }
</style>
