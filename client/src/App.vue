<template>
  <div class="container">
    <Header @toggleForm="toggleForm($event)" :showForm="showForm" />
    <div v-if="showForm">
      <TaskForm @addTask="addTask($event)" />
    </div>
    <Tasks @deleteTask="deleteTask($event)" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import TaskForm from "./components/TaskForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    TaskForm,
  },
  data() {
    return {
      tasks: [],
      showForm: false,
    };
  },
  methods: {
    async deleteTask(id) {
      await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });
      this.tasks = this.tasks.filter((task) => task._id !== id);
    },
    async addTask(newTask) {
      await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(newTask),
      });
      this.tasks = [...this.tasks, newTask];
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    async fetchTasks() {
      const res = await fetch("/api/tasks");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
