<template>
  <div class="listeType">
    <button v-on:click="filtrePoke('')" type="button">Tous</button>
    <button v-on:click="filtrePoke('water')" type="button">Eau</button>
    <button v-on:click="filtrePoke('normal')" type="button">Normal</button>
    <button v-on:click="filtrePoke('poison')" type="button">Poison</button>
    <button v-on:click="filtrePoke('fire')" type="button">Feu</button>
    <button v-on:click="filtrePoke('bug')" type="button">Insecte</button>
    <button v-on:click="filtrePoke('grass')" type="button">Plante</button>
    <button v-on:click="filtrePoke('electric')" type="button">
      Electrique
    </button>
    <button v-on:click="filtrePoke('rock')" type="button">Roche</button>
    <button v-on:click="filtrePoke('psychic')" type="button">Psy</button>
    <button v-on:click="filtrePoke('ground')" type="button">Sol</button>
    <button v-on:click="filtrePoke('fighting')" type="button">Combat</button>
    <button v-on:click="filtrePoke('dragon')" type="button">Dragon</button>
    <button v-on:click="filtrePoke('ghost')" type="button">Spectre</button>
    <button v-on:click="filtrePoke('fairy')" type="button">Fee</button>
    <button v-on:click="filtrePoke('ice')" type="button">Glace</button>
  </div>
</template>

<script>
export default {
  name: "Choice",
  methods: {
    filtrePoke(param) {
      this.$emit("filtrePoke", param);
    },
  },
};

//garder le button 'allumer' lors que l'on clique dessus
</script>

<style>
.listeType {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.listeType button {
  font-size: 22px;
  font-family: "Chakra Petch", sans-serif;
  color: #3b5ba7;
  padding: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 99999999px;
  transition: all 0.5s ease-in-out;
}
.listeType button:hover {
  background: #ffcb05;
  color: #3b5ba7;
}
.listeType button:focus {
  background: #3b5ba7;
  color: #ffcb05;
}

@media screen and (max-width: 800px) {
  .listeType {
    padding-top: 70px;
  }
}
@media screen and (max-width: 550px) {
  .listeType {
    display: none;
  }
}
</style>
