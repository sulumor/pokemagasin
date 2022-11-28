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
  padding: 4em 3em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 55%;
}

.dimension p {
  font-size: 55px;
  margin: 30px;
}

@media screen and (max-width: 1900px) {
  .dimension p {
    font-size: 50px;
    margin: 20px;
  }
}

@media screen and (max-width: 1500px) {
  .dimension p {
    font-size: 30px;
    margin: 10px;
  }
}

@media screen and (max-width: 1050px) {
  .dimension {
    padding: 20px;
  }
  .dimension p {
    font-size: 25px;
    margin: 10px;
  }
}
@media screen and (max-width: 800px) {
  .dimension {
    padding: 0px;
  }
  .dimension p {
    font-size: 20px;
    margin: 10px;
  }
}
@media screen and (max-width: 650px) {
  .dimension p {
    font-size: 15px;
  }
}
@media screen and (max-width: 550px) {
  .dimension p {
    margin: 0 5px 0 0;
  }
}
</style>
