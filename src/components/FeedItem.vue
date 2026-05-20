<template>
  <div class="feed-container">
    <div class="feed-header">
      <div class="feed-content">{{ feed.content }}</div>
      <button class="feed-delete-button" @click="handleClick()">X</button>
    </div>
    <div class="feed-name">{{ feed.user.name }}</div>
  </div>
</template>

<script>
import { useFeedStore } from "@/store/Feed";
export default {
  name: "FeedItem",
  data() {
    return {
      feedStore: useFeedStore(),
    };
  },
  props: {
    feed: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$confirm({
        message: "Are you sure?",
        button: {
          no: "No",
          yes: "Yes",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            console.log("삭제");
            this.$emit("delete", this.feed.id);
          }
        },
      });
    },
  },
};
</script>
