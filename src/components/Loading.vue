<template>
  <transition name="fadeOut">
    <div class="loadingPage">
      <div class="loading">
        <p>CHARGEMENT</p>
        <img src="../assets/loading/pikachu.png" alt="pikachu" />
        <img src="../assets/loading/bullbasaur.png" alt="bulbizare" />
        <img src="../assets/loading/caterpie.png" alt="pikachu" />
        <img src="../assets/loading/rattata.png" alt="rattata" />
        <img src="../assets/loading/zubat.png" alt="pikachu" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loadingPage {
  width: 100vw;
  height: 100vh;
  background: #3b5ba7;
}
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading p {
  color: #ffcb05;
  font-size: 60px;
  font-weight: 900;
}
.loading img {
  height: 50px;
  width: 50px;
  margin: 0 15px;
  animation: monte 0.5s alternate infinite;
}
.loading img:nth-child(2) {
  animation-delay: 0.1s;
}

.loading img:nth-child(3) {
  animation-delay: 0.2s;
}

.loading img:nth-child(4) {
  animation-delay: 0.3s;
}

.loading img:nth-child(5) {
  animation-delay: 0.4s;
}

.loading img:nth-child(6) {
  animation-delay: 0.5s;
}
.fadeOut-leave-active {
  transition: opacity 0.8s;
}
.fadeOut-leave {
  opacity: 1;
}
.fadeOut-leave-to {
  opacity: 0;
}
@keyframes monte {
  100% {
    transform: translateY(-50px);
  }
}

@media screen and (max-width:800px){
    .loading p{
        font-size: 40px
    }
    .loading img{
        width: 30px;
        height: 30px;
    }
}
@media screen and (max-width:600px){
    .loading{
        flex-direction: column;
        justify-content: space-evenly;
    }
    .loading p{
        font-size: 40px
    }
    .loading img{
        width: 20px;
        height: 20px;
    }
}
</style>