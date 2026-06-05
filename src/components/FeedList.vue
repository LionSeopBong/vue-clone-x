<template>
  <div class="feed-list-container">
    <div v-if="feedStore.getFeedList.length > 0">
      <feedItem v-for="feed in feedStore.getFeedList" :key="feed.id" :feed="feed" @delete="handleDelete" />
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<script>
import FeedItem from "@/components/FeedItem.vue";
import { useFeedStore } from "@/store/Feed";

export default {
  name: "FeedList",
  data() {
    return {
      feedStore: useFeedStore(),
    };
  },
  components: { FeedItem },
  created() {
    this.feedStore.getFeedData();
  },
  methods: {
    handleDelete(id) {
      this.feedStore.removeFeed(id);
    },
  },
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
  color: black;
}
.feed-container {
  height: 80px;
  background-color: white;
  margin: 10px 0px;
  color: black;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}
.feed-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.feed-content {
  padding: 1%;
}
.feed-delete-button {
  background: none;
  border: none;
  cursor: pointer;
}
.feed-name {
  text-align: right;
  font-size: 12px;
}
</style>
