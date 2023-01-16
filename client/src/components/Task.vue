<template>
  <div class="task">
    <h3>
      {{ task.text }}
      <i @click="deleteTask(task._id)" class="fas fa-times"> </i>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    deleteTask(id) {
      this.$emit("deleteTask", id);
    },
  },
};
</script>

<style>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
