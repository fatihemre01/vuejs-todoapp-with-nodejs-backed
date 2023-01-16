<template>
  <header>
    <h1>ToDo App</h1>
    <Button
      @toggleForm="toggleForm($event)"
      :text="showForm ? 'Close' : 'Add Task'"
      :color="showForm ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  components: {
    Button,
  },
  props: {
    showForm: Boolean,
  },
  methods: {
    toggleForm() {
      this.$emit("toggleForm");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
