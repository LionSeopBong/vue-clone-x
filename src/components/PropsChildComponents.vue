<template>
  <div>{{ message }} {{ toChild }}</div>
</template>

<script>
export default {
  name: "PropschildComponents",

  data() {
    return {
      message: " 나는 자식컴포넌트",
    };
  },
  props: {
    toChild: String,
  },
};
</script>
