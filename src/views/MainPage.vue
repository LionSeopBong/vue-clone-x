<template>
  <div>
    <div class="title-container">
      <h2>Home</h2>
      <div>User님</div>
    </div>
    <TweetBar />
    <FeedList />
  </div>
</template>

<script>
import TweetBar from "@/components/TweetBar.vue";
import FeedList from "@/components/FeedList.vue";
export default {
  name: "MainPage",
  components: { TweetBar, FeedList },
  data() {
    return {
      feeds: [
        { id: 1, content: "첫번째 피드", name: "김유저" },
        { id: 2, content: "두번째 피드", name: "김유저" },
        { id: 3, content: "세번째 피드", name: "김유저" },
        { id: 4, content: "네번째 피드", name: "김유저" },
        { id: 5, content: "다섯번째 피드", name: "김유저" },
        { id: 6, content: "여섯번째 피드", name: "김유저" },
        { id: 7, content: "일곱번째 피드", name: "김유저" },
        { id: 8, content: "여덟번째 피드", name: "김유저" },
        { id: 9, content: "아홉번째 피드", name: "김유저" },
      ],
    };
  },
};
</script>

<style>
.title-container {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
