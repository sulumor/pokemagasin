<template>
  <div class="selectType">
    <select v-on:change="selectPoke(selectType)" v-model="selectType">
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
    <div class="goTo">
      <h6>Allez au Pokemon n°</h6>
      <a href="#26">#30</a>
      <a href="#56">#60</a>
      <a href="#86">#90</a>
      <a href="#116">#120</a>
      <a href="#146">#150</a>
    </div>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.selectType {
  display: none;
  padding-top: 70px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}
.selectType select {
  padding: 5px 10px;
  margin: 0 20px;
  width: 40%;
  border: 1px solid #3b5ba7;
  font-weight: 600;
  
  outline: none;
}
.goTo{
  text-align: center;
}
.goTo h6{
  color: #ffcb05;
}
.goTo a{
  color: #3b5ba7;
  margin-right: 5px ;
}
@media screen and (max-width: 550px) {
  .selectType {
    display: block;
    display: flex;
  }
}
@media screen and (max-width: 450px) {
  .selectType select {
    width: 45%;
  }
}
</style>