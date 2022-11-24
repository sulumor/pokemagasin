<template>
  <div class="pic">
    <img :src="pokemon.pic[index]" :alt="pokemon.name" />
    <p>{{ pokemon.description }}</p>
  </div>
</template>

<script>
export default {
  name: "simplePic",
  props: ["pokemon", "index"],
};
</script>
<style></style>
