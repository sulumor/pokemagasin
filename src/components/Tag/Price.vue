<template>
  <div class="price">
    <span>{{ prix }} €</span>
  </div>
</template>
<script>
export default {
  name: "Price",
  props: ["prix"],
};
</script>
<style>
.price {
  font-weight: bold;
  font-size: 35px;
}
</style>
