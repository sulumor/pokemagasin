<template>
  <nav class="nav-container">
    <ul>
      <li>
        <router-link to="/"
          class="title">POKEMAGASIN <span>(1ère génération)</span></router-link>
      </li>
      <li >
        <router-link to="/panier" class="cartPic"
          ><img src="../assets/add-to-basket.svg" alt="" />
        <p v-show="cart.length > 0">{{ cart.length }}</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Nav",
  computed:{
    ...mapState(["cart"]),
  }
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 70px;
  background: #ffcb05;
  border-bottom: 2px dashed #3b5ba7;
  position: fixed;
  z-index: 10;
}
.nav-container ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
}
.cartPic {
  position: relative;
}
.cartPic img {
  height: 50px;
}
.cartPic p {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 5px;
  font-size: 16px;
  background: #3b5ba7;
  color: #ffcb05;
}
@media screen and (max-width: 800px) {
  .nav-container {
    height: 60px;
  }
  .cartPic img {
    height: 40px;
  }
}
@media screen and (max-width: 550px) {
  .nav-container {
    height: 50px;
  }
  .title,
  .titlespan {
    font-size: 20px;
  }
  .cartPic img {
    height: 30px;
  }
  .cartPic p {
    font-size: 12px;
    padding: 3.5px;
  }
}
@media screen and (max-width: 380px) {
  .title,
  .titlespan {
    font-size: 15px;
  }
}

</style>