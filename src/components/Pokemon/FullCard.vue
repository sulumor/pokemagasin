<template>
  <div
    v-bind:style="{
      background: cardColor(pokemon),
    }"
    class="sheet"
  >
    <p class="titre"># {{ this.id }} {{ pokemon.name }}</p>
    <div class="infos">
      <simplePic v-bind:pokemon="pokemon" index="1" />
      <featuresCard v-bind:pokemon="pokemon" />
      <addCartBtn v-bind:pokemon="pokemon" />
      <priceTag v-bind:prix="pokemon.price" />
    </div>
    <rightbtn v-bind:id="this.id" v-on:pokeSuivant="changementId($event)" />
    <leftbtn v-bind:id="this.id" v-on:pokePrecedent="changementId($event)" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../../store";
import Right from "../../components/Button/Right.vue";
import Left from "../../components/Button/Left.vue";
import Simple from "../Picture/Simple.vue";
import Features from "../Card/Features.vue";
import AddCart from "../../components/Button/AddCart.vue";
import Price from "../Tag/Price.vue";

export default {
  name: "fullCard",
  components: {
    leftbtn: Left,
    rightbtn: Right,
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
    changementId(nvId) {
      this.id = nvId;
      this.$emit("changementId", this.id);
    },
  },
  computed: {
    ...mapState(["types"]),
  },
};
</script>

<style>
.sheet {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  border: 1px solid #333;
  border-radius: 15px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.4);
  position: relative;
}

.titre {
  width: 100%;
  text-align: center;
  font-size: 100px;
  padding: 20px 0;
}

.infos {
  position: relative;
  display: flex;
  height: calc(100% - 100px);
  border-radius: 15px;
}

.pic {
  width: 45%;
  height: 100%;
  padding: 20px;
}
.pic img {
  width: 100%;
  height: 65%;
  padding: 0 20px 25px 20px;
  filter: drop-shadow(2px 2px 10px rgba(255, 255, 255, 0.8));
}
.pic p {
  height: 35%;
  padding-top: 50px;
  text-align: center;
  font-size: 2.7vh;
  letter-spacing: 1.5px;
  line-height: 2.7vh;
  font-weight: 600;
}

.achat .panier,
.achat .sold_out {
  width: 100%;
  padding: 15px;
}
.achat .panier {
  background: #3b5ba7;
}

.achat .panier span,
.achat .sold_out span {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 25px;
}
.achat .panier span {
  color: #ffcb05;
}
.achat .panier:hover {
  background: #ffcb05;
}
.achat .panier:hover span {
  color: #3b5ba7;
}
.achat .sold_out {
  cursor: not-allowed;
}
.achat .sold_out span {
  color: crimson;
}

@media screen and (max-width: 1900px) {
  .titre {
    font-size: 90px;
  }
  .achat button {
    padding: 20px 50px;
    font-size: 55px;
  }

  .pic p {
    padding-top: 0;
  }
}

@media screen and (max-width: 1500px) {
  .titre {
    font-size: 70px;
  }

  .achat {
    height: 30px;
  }
  .achat button {
    padding: 10px 20px;
    font-size: 25px;
  }
  .achat button img {
    width: 50px;
    padding: 0;
  }

  .pic p {
    padding-top: 0;
    font-size: 2.3vh;
    height: 55%;
    line-height: 2.3vh;
    text-align: justify;
  }
}

@media screen and (max-width: 1050px) {
  .titre {
    font-size: 50px;
  }

  .achat {
    height: 25px;
  }
  .achat button {
    padding: 10px 20px;
    font-size: 20px;
  }
  .achat button img {
    width: 30px;
    padding: 0;
  }

  .pic img {
    padding: 10px;
  }
}
@media screen and (max-width: 800px) {
  .titre {
    font-size: 40px;
  }

  .achat .panier span,
  .achat .sold_out span {
    font-size: 20px;
  }
}
@media screen and (max-width: 650px) {
  .titre {
    font-size: 30px;
  }

  .pic {
    padding: 5px;
  }
}
@media screen and (max-width: 550px) {
  .titre {
    font-size: 20px;
  }

  .achat button {
    font-size: 0px;
    padding: 20px;
  }
  .achat button img {
    margin: 0;
  }
  .pic img {
    height: 50%;
  }
  .achat .panier,
  .achat .sold_out {
    padding: 10px;
  }
  .achat .panier span .achat .sold_out span {
    font-size: 15px;
  }
}
</style>
