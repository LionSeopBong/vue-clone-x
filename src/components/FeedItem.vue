<template>
  <div class="feed-container">
    <div class="feed-header">
      <div class="feed-content">{{ feed.content }}</div>
      <button class="feed-delete-button" @click="deleteFeed">X</button>
    </div>
    <div class="feed-name">{{ feed.user.name }}</div>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    feed: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteFeed() {
      this.$emit("delete", this.feed.id);
    },
  },
};
</script>
