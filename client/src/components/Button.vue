<template>
  <button @click="toggleForm()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    toggleForm() {
      this.$emit("toggleForm");
    },
  },
};
</script>
