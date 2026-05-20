import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    //유저 정보
    user: { id: 1, name: "김유저" },
  }),
  getters: {
    // 유저이름 반환
    getUserName: (state) => state.user.name,
  },
  actions: {},
});
