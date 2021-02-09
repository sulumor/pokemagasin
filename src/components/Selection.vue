<template>
  <div class="selectType">
    <select v-on:change = "selectPoke(selectType)" v-model="selectType">
      <option value="">Selectionner un type</option>
      <option value="water">Eau</option>
      <option value="normal">Normal</option>
      <option value="poison">Poison</option>
      <option value="fire">Feu</option>
      <option value="bug">Insecte</option>
      <option value="grass">Plante</option>
      <option value="electric">Electrique</option>
      <option value="rock">Roche</option>
      <option value="psychic">Psy</option>
      <option value="ground">Sol</option>
      <option value="fighting">Combat</option>
      <option value="dragon">Dragon</option>
      <option value="ghost">Spectre</option>
      <option value="fairy">Fee</option>
      <option value="ice">Glace</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Selection",
  data() {
    return {
      selectType: "",
    };
  },
  methods: {
    selectPoke(param) {
      this.$emit("selectPoke", param);
    },
  },
};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.selectType {
  display: none;
  padding-top: 70px;
  width: 100%; 
}
.selectType select{
    padding: 5px 10px;
    margin: 0 20px;
    width: 40%;
    font-family: "Roboto", sans-serif;
    border-radius: 15px;
    border: 1px solid #3b5ba7;
    font-weight: 600;
    font-size: 15px;
    outline: none;
}
@media screen and (max-width: 550px) {
  .selectType {
    display: block;
  }
}
@media screen and (max-width: 450px) {
  .selectType select{
    width: 60%;
  }
}
</style>