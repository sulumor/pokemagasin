<template>
  <div class="left">
    <button v-on:click="pokePrecedent">
      <router-link
        v-if="this.id > 1"
        :to="`/${pokemons[this.id - 2].id}/${pokemons[this.id - 2].name}`"
      >
        <img src="../../assets/next.png" alt="" />
        <p>{{ pokemons[this.id - 2].name }}</p>
      </router-link>
      <router-link v-else :to="`/${pokemons[150].id}/${pokemons[150].name}`"
        ><img src="../../assets/next.png" alt="" />
        <p>{{ pokemons[150].name }}</p>
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
      this.id = parseInt(this.id);
      if (this.id === 1) this.id = 151;
      else this.id = this.id - 1;
      this.$emit("pokePrecedent", this.id);
    },
  },
  computed: {
    ...mapState(["pokemons"]),
  },
};
</script>

<style>
.left {
  position: absolute;
  top: 50%;
  left: -13vw;
  transform: translate(50%, -50%);
  width: 7vw;
  height: 7vw;
}
.left button {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
}
.left p {
  font-size: 16px;
  color: #ffcb05;
}
.left img {
  width: 7vw;
  height: 7vw;
  transform: rotate(180deg);
  color: #ffcb05;
}
.left button:hover {
  animation: 0.5s linear infinite alternate recule;
  -webkit-animation: 0.5s linear infinite alternate recule;
}
@keyframes recule {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-40%);
  }
}
</style>
