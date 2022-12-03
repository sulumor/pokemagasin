<template>
  <div class="dimension">
    <p>
      Taille :
      {{ pokemon.height / 10 }} m
    </p>
    <p>
      Poids :
      {{ pokemon.weight / 10 }} kg
    </p>
    <p>Vie : {{ pokemon.life }}</p>
    <p>Attaque : {{ pokemon.attack }}</p>
    <p>Defense : {{ pokemon.defense }}</p>
    <p>Vitesse : {{ pokemon.speed }}</p>
    <p class="description">{{ pokemon.description }}</p>
  </div>
</template>
<script>
export default {
  name: "Features",
  props: ["pokemon"],
};
</script>

<style>
.dimension {
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(3, auto);
  padding-top: 20px;
}
.dimension p {
  color: hsl(219, 9%, 45%);
  padding: 5px;
}
.description {
  grid-row: 4/6;
  grid-column: 1/4;
  padding-top: 5px;
}
</style>
