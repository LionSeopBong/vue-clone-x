<template>
  <div class="feed-container">
    <div class="feed-header">
      <div class="feed-content">{{ feed.content }}</div>
      <button class="feed-delete-button">X</button>
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
};
</script>
