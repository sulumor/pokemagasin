<template>
  <div v-bind:style="{ background: cardColor(pokemon) }" class="card">
    <router-link v-bind:to="`/${pokemon.id}/${pokemon.name}`">
      <p class="id" :id="pokemon.id"># {{ pokemon.id }}</p>
      <p v-show="pokemon.stock === 1" class="stock">Dernier dispo</p>
      <simplePic v-bind:pokemon="pokemon" :index="0" />
      <div class="namePrice">
        <span class="name">{{ pokemon.name }}</span>
        <span class="price">{{ pokemon.price }} €</span>
      </div>
    </router-link>
    <smallAddCart v-bind:pokemon="pokemon" />
  </div>
</template>

<script>
import SmallAddCart from "../Button/SmallAddCart.vue";
import Simple from "../Picture/Simple.vue";

export default {
  name: "SmallCard",
  props: ["pokemon"],
  components: {
    smallAddCart: SmallAddCart,
    simplePic: Simple,
  },
  methods: {
    cardColor(pokemon) {
      let color = this.$store.state.types[pokemon.type];
      return color;
    },
  },
};
</script>

<style>
.card {
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.7);
  width: 150px;
  height: 250px;
  border-radius: 15px;
  margin: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.card a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: #000;
}
.card .id {
  padding: 10px 10px 0;
}

.stock {
  position: absolute;
  bottom: 35px;
  color: #67674bba;
  text-transform: uppercase;
  font-weight: 900;
}
.namePrice {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.namePrice span {
  width: 100%;
  margin: 5px auto;
  text-align: center;
  font-size: 25px;
  font-weight: 800;
}
</style>
