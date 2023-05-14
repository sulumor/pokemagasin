<template>
  <div class="empty">
    <p>
      - Panier vide -<br /><br /><br />
      Allez vite au
      <router-link to="/" class="magasin">magasin</router-link> pour choisir vos
      pokémons préférés
    </p>
  </div>
</template>
<script>
export default {
  name: "EmptyCard",
};
</script>
<style>
.magasin {
  color: #ffcb05;
}
.empty {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty p {
  font-size: 50px;
  text-align: center;
  color: #3b5ba7;
}
@media screen and (max-width: 900px) {
  .empty p {
    font-size: 35px;
  }
}
@media screen and (max-width: 650px) {
  .empty p {
    font-size: 30px;
  }
}
</style>
