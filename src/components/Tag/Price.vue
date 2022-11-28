<template>
  <div>
    <span class="price">{{ prix }} €</span>
  </div>
</template>
<script>
export default {
  name: "Price",
  props: ["prix"],
};
</script>
<style>
@media screen and (max-width: 1500px) {
  .price {
    font-size: 55px;
    padding: 20px;
  }
}

@media screen and (max-width: 1050px) {
  .price {
    top: -80px;
    font-size: 40px;
    padding: 20px;
  }
}
@media screen and (max-width: 800px) {
  .price {
    top: -70px;
    font-size: 30px;
    padding: 10px;
  }
}
@media screen and (max-width: 650px) {
  .price {
    top: -50px;
    font-size: 20px;
    padding: 5px;
  }
}
@media screen and (max-width: 550px) {
  .price {
    font-size: 12px;
    padding: 5px;
  }
}
</style>
