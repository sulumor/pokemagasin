<template>
  <div class="right">
    <button v-on:click="pokeSuivant">
      <router-link
        v-if="this.id < 151"
        :to="`/${pokemons[this.id].id}/${pokemons[this.id].name}`"
      >
        <img src="../../assets/next.png" alt="" />
        <p>{{ pokemons[this.id].name }}</p></router-link
      >
      <router-link v-else :to="`/${pokemons[0].id}/${pokemons[0].name}`"
        ><img src="../../assets/next.png" alt="" />
        <p>{{ pokemons[0].name }}</p>
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
      this.id = parseInt(this.id);
      if (this.id === 151) this.id = 1;
      else this.id = this.id + 1;
      this.$emit("pokeSuivant", this.id);
    },
  },
  computed: {
    ...mapState(["pokemons"]),
  },
};
</script>

<style>
.right {
  position: absolute;
  top: 50%;
  right: -4vw;
  transform: translate(50%, -50%);
  width: 7vw;
  height: 7vw;
}
.right button {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
}
.right img {
  width: 7vw;
  height: 7vw;
}
.right p {
  font-size: 16px;
  color: #ffcb05;
}
.right button:hover {
  animation: 0.5s linear infinite alternate avance;
  -webkit-animation: 0.5s linear infinite alternate avance;
}
@keyframes avance {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(40%);
  }
}
</style>
