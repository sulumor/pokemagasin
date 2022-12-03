<template>
  <div class="sheet">
    <div class="leftPart">
      <simplePic v-bind:pokemon="pokemon" index="1" />
    </div>
    <div class="rightPart">
      <p
        class="titre"
        v-bind:style="{
          color: cardColor(pokemon),
        }"
      >
        # {{ this.id }} {{ pokemon.name }}
      </p>
      <featuresCard v-bind:pokemon="pokemon" />
      <priceTag v-bind:prix="pokemon.price" />
      <addCartBtn v-bind:pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../../store";

import Simple from "../Picture/Simple.vue";
import Features from "../Card/Features.vue";
import AddCart from "../../components/Button/AddCart.vue";
import Price from "../Tag/Price.vue";

export default {
  name: "fullCard",
  components: {
    simplePic: Simple,
    featuresCard: Features,
    addCartBtn: AddCart,
    priceTag: Price,
  },
  store: store,
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: ["pokemon"],
  methods: {
    cardColor(poke) {
      let color = this.types[poke.type];
      return color;
    },
  },
  computed: {
    ...mapState(["types"]),
  },
};
</script>

<style>
.sheet {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  width: 80vw;
  margin: 0 auto;
}

.leftPart,
.rightPart {
  width: 50%;
  height: 100%;
}

.rightPart {
  padding: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.titre {
  font-weight: bold;
  font-size: 32px;
  text-transform: uppercase;
}
</style>
