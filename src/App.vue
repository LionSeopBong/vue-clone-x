<template>
  <div class="container">
    <!-- <router-link to="/demo">데모페이지 이동</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background: black;
  color: rgb(238, 237, 237);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.container {
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.logo {
  max-width: 60px;
  height: auto;
}
.button {
  border-radius: 20px;
  border: 1px solid white;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
.error-massege {
  color: red;
  font-size: small;
  width: 100%;
}
</style>
