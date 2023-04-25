<template>
  <div class="selectType">
    <select v-on:change="selectPoke(selection)" v-model="selection">
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
      selection: "",
    };
  },
  methods: {
    selectPoke(param) {
      this.$emit("selectPoke", param);
    },
  },
};
</script>

<style>
.selectType {
  display: flex;
  width: 40vw;
  padding: 15px;
}
.selectType select {
  padding: 12px 10px;
  width: 100%;
  border-radius: 9999999999px;
  border: 2px solid #3b5ba7;
  font-weight: 600;
  outline: none;
}

@media screen and (max-width: 450px) {
  .selectType select {
    width: 45%;
  }
}
</style>
