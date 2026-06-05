import { authApi } from "@/api";
import { defineStore } from "pinia";

export const useFeedStore = defineStore("Feed", {
  state: () => ({
    feedData: [],
  }),
  getters: {
    getFeedList: (state) => state.feedData,
  },
  actions: {
    async getFeedData() {
      try {
        const response = await authApi.get("feeds/");
        this.feedData = response.data;
      } catch (error) {
        console.error("Error fetching feed data:", error);
      }
    },
    async removeFeed(id) {
      try {
        await authApi.delete(`feeds/${id}`);
        this.getFeedData();
      } catch (error) {
        console.error("Error Removing feed:", error);
      }
    },
    async addFeed(content) {
      try {
        await authApi.post("feeds/", { content });
        this.getFeedData();
      } catch (error) {
        console.error("Error adding feed:", error);
      }
    },
  },
});
