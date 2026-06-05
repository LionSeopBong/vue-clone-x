<template>
  <div class="logo-container">
    <img src="../assets/x-logo.png" class="logo" />
  </div>
  <div class="title">계정을 생성하세요</div>
  <InputFiled :type="'text'" :placeholder="'Email'" v-model="email" :errorMsg="'이메일을 입력해주세요'" />
  <InputFiled :type="'name'" :placeholder="'Name'" v-model="name" :errorMsg="'이름을 입력해주세요'" />
  <InputFiled :type="'password'" :placeholder="'Password'" v-model="password" :errorMsg="'비밀번호를 입력해주세요'" />
  <InputFiled :type="'password'" :placeholder="'PasswordConfirm'" v-model="passwordConfirm" />
  <span v-if="!isPasswordMatch && passwordConfirm" class="error-massege">비밀번호가 일치하지 않습니다.</span>
  <button class="button" @click="signup">회원가입</button>
</template>

<script>
import { api } from "@/api";
import InputFiled from "@/components/InputFiled.vue";
export default {
  name: "SignUpPage",
  components: { InputFiled },
  data() {
    return { email: "", name: "", password: "", passwordConfirm: "" };
  },
  methods: {
    async signup() {
      if (!this.email || !this.password || !this.name || !this.passwordConfirm) {
        alert("모든 필드를 입력해주세요.");
        return;
      }
      if (this.password !== this.passwordConfirm) {
        alert("입력된 Password 와 확인 password가 다릅니다");
        return;
      }
      try {
        const response = await api.post("/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log("회원가입 성공:", response.data);
        this.$router.push("/");
      } catch (error) {
        console.log("회원가입 실패", error);
        alert("회원가입 실패");
      }
    },
  },
  computed: {
    isPasswordMatch() {
      return this.password === this.passwordConfirm;
    },
  },
};
</script>

<style>
.title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: large;
  padding: 1%;
}
</style>
