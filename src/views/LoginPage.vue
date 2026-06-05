<template>
  <div class="logo-container">
    <img src="../assets/x-logo.png" class="logo" />
  </div>
  <div>
    <InputFiled :type="'text'" :placeholder="'Email'" v-model="email" :errorMsg="'이메일을 입력하세요.'" />
    <InputFiled :type="'password'" :placeholder="'Password'" v-model="password" :errorMsg="'비밀번호를 입력하세요.'" />

    <button class="button" @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <router-link class="signup-button" to="/signup">가입하기</router-link>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";
import InputFiled from "@/components/InputFiled.vue";
import { useUserStore } from "@/store/User";
export default {
  name: "LoginPage",
  components: { InputFiled },
  data() {
    return {
      userStore: useUserStore(),
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        alert("모든 필드를 입력해주세요");
        return;
      }
      const payload = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await api.post("/users/login", payload);
        console.log("로그인성공");
        this.userStore.setUser(response.data);
        this.userStore.saveToken(response.data.access_token);
        console.log("리스폰데이터:", response.data);
        console.log("유저 이름:", this.userStore.name);
        this.$router.push("/main");
      } catch (error) {
        console.log(payload.email, payload.password);
        console.log("로그인 실패");
        alert("로그인 실패!");
      }
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
