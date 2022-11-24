<template>
  <div>
    <button type="button" class="top">
      <a href="#top">
        retour au top
      </a>
    </button>
  </div>
</template>
<script>
export default {
  name: "Top",
};
</script>
<style>
.top {
  position: fixed;
  bottom: 90px;
  right: 2vw;
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
  transition: all 15s ease;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
}
</style>
