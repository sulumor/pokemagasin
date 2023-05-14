<template>
  <button class="back">
    <router-link to="/"
      ><img src="../../assets/back-arrow.png" /> Continuer mes
      achats</router-link
    >
  </button>
</template>

<script>
  export default {
    name: "Retour",
  };
</script>

<style>
  .back {
    position: absolute;
    top: 90px;
    left: 2vw;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid #000;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.7);
    padding: 10px 20px;
    margin: 0 auto;
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
  }
  .back img {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 800px) {
    .back {
      top: 70px;
      font-size: 15px;
    }
    .back img {
      width: 15px;
      height: 15px;
    }
  }
</style>
