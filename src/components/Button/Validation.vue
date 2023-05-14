<template>
  <button class="commande" type="button">
    <img src="../../assets/pokeball-color.png" alt="pokeball" />Confirmer la
    commande
  </button>
</template>
<script>
  export default {
    name: "Validation",
  };
</script>
<style>
  .commande {
    width: 90%;
    margin: 0 auto 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    background: #ffcb05;
    color: #3b5ba7;
  }
  .commande img {
    width: 30px;
    height: 30px;
    margin: 0 15px;
  }
  @media screen and (max-width: 1250px) {
    .commande {
      font-size: 15px;
    }
  }
</style>
