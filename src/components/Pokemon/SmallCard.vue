<template>
  <div v-bind:style="{ background: cardColor(pokemon) }" class="card">
    <router-link v-bind:to="`/${pokemon.id}/${pokemon.name}`">
      <p class="id" :id="pokemon.id"># {{ pokemon.id }}</p>
      <p v-show="pokemon.stock === 1" class="stock">Dernier dispo</p>
      <simplePic v-bind:picture="pokemon.pic[0]" :name="pokemon.name" />
      <div class="namePrice">
        <span class="name">{{ pokemon.name }}</span>
        <span class="price">{{ pokemon.price }} €</span>
      </div>
    </router-link>
    <addCart v-bind:pokemon="pokemon" />
  </div>
</template>

<script>
import AddCart from "../Button/AddCart.vue";
import Simple from "../Picture/Simple.vue";

export default {
  name: "SmallCard",
  props: ["pokemon"],
  components: {
    addCart: AddCart,
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

.card:hover .picPoke {
  transform: scale(1.2);
}

.stock {
  position: absolute;
  bottom: 35px;
  color: crimson;
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

@media screen and (max-width: 800px) {
  .card {
    width: 100px;
    height: 200px;
    margin: 10px 10px;
  }
  .card .picPoke {
    width: 70px;
  }
  .namePrice span {
    font-size: 15px;
  }
  .stock {
    font-size: 12px;
    margin-bottom: 3px;
  }
}
@media screen and (max-width: 550px) {
  .card {
    width: 75px;
    height: 150px;
    margin: 10px 3px;
  }
  .card .picPoke {
    width: 40px;
  }
  .card .id {
    font-size: 8px;
  }
  .namePrice span {
    font-size: 10px;
  }
  .stock {
    font-size: 8px;
    text-align: center;
    margin-bottom: 3px;
  }
}
</style>
