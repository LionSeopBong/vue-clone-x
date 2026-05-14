<template>
  <div class="logo-container">
    <img src="../assets/x-logo.png" class="logo" />
  </div>
  <div>
    <InputFiled :type="'text'" :placeholder="'Email'" v-model="email" />
    <InputFiled :type="'password'" :placeholder="'Password'" v-model="password" />

    <button class="button" @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <router-link class="signup-button" to="/signup">가입하기</router-link>
    </div>
  </div>
</template>

<script>
import InputFiled from "@/components/InputFiled.vue";
export default {
  name: "LoginPage",
  components: { InputFiled },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert("모든 필드를 입력해주세요.");
        return;
      }
      console.log("로그인 성공", this.email, this.password);
    },
  },
};
</script>

<style>
.signup-button {
  color: aqua;
  cursor: pointer;
}
</style>
