<template>
  <div class="sheet">
    <div class="leftPart">
      <hoverPic :pokemon="pokemon" index="1" />
    </div>
    <div class="rightPart">
      <p
        class="titre"
        :style="{
          color: this.$store.state.types[pokemon.type],
        }"
      >
        # {{ pokemon.id }} {{ pokemon.name }}
      </p>
      <featuresCard :pokemon="pokemon" />
      <priceTag :prix="pokemon.price" />
      <addCartBtn :pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
  import Hover from "../Picture/WithHover.vue";
  import Features from "../Card/Features.vue";
  import AddCart from "../../components/Button/AddCart.vue";
  import Price from "../Tag/Price.vue";

  export default {
    name: "fullCard",
    components: {
      hoverPic: Hover,
      featuresCard: Features,
      addCartBtn: AddCart,
      priceTag: Price,
    },
    data() {
      return {
        id: this.$route.params.id,
      };
    },
    props: ["pokemon"],
  };
</script>

<style>
  .sheet {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    width: 80vw;
    margin: 0 auto;
  }

  .leftPart,
  .rightPart {
    width: 50%;
    height: 100%;
  }

  .rightPart {
    padding: 10vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .titre {
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
  }
</style>
