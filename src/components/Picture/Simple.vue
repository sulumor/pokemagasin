<template>
  <div class="picture">
    <img v-bind:src="pokemon.pic[index]" :alt="pokemon.name" />
  </div>
</template>
<script>
export default {
  name: "simple",
  props: ["pokemon", "index"],
};
</script>
<style>
.picture {
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
}
.picture img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
