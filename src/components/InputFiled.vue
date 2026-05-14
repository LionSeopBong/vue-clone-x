<template>
  <div class="container">
    <input class="input-form" :type="type" :placeholder="placeholder" :value="modelValue" @input="updateValue" @blur="handleBlur" />
  </div>
  <span v-if="(touched || showError) && !modelValue" class="error-massege">{{ errorMsg }}</span>
</template>

<script>
export default {
  name: "InputFiled",
  data() {
    return {
      Touched: false,
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "입력하세요.",
    },
    modelValue: {
      type: String,
      required: true,
    },
    errorMsg: {
      type: String,
      default: "이 값은 필수 입니다.",
    },
    showError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.Touched = true;
      const value = event.target.value.trim();
      this.$emit("update:modelValue", value);
    },
    handleBlur() {
      this.touched = true;
    },
  },
};
</script>

<style scoped>
.container {
  height: fit-content;
  width: 300px;
}

.input-form {
  box-sizing: border-box;
  widows: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: #000000;
  margin-bottom: 10px;
  font-size: 12px;
  color: gray;
}
</style>
