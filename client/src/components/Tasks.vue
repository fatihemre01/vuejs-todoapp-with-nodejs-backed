<template>
  <div :key="task._id" v-for="task in tasks">
    <Task @deleteTask="deleteTask($event)" :task="task" />
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
  methods: {
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
  },
  emits: ["deleteTask"],
};
</script>
