<template>
  <div class="pic">
    <img :src="pokemon.pic[index]" :alt="pokemon.name" class="firstImg" />
    <img :src="pokemon.pic[0]" :alt="pokemon.name" class="secImg" />
  </div>
</template>
<script>
  export default {
    name: "withHover",
    props: ["pokemon", "index"],
  };
</script>
<style>
  .pic {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .pic img {
    position: absolute;
    top: 0;
    left: 0;
    height: 90%;
    width: 90%;
  }
  .firstImg {
    opacity: 1;
  }
  .secImg {
    opacity: 0;
  }

  .pic:hover > .firstImg {
    opacity: 0;
  }
  .pic:hover > .secImg {
    opacity: 1;
  }
</style>
