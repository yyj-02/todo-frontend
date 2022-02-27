<template>
  <v-app>
    <v-container class="pa-0">
      <TodoList
        :todoList="todoList"
        :editingId="editingId"
        v-on:toggle-status="(payload) => toggleStatus(payload)"
        v-on:update-todo="(payload) => updateTodo(payload)"
        v-on:edit-todo="(payload) => editTodo(payload)"
        v-on:delete-todo="(payload) => deleteTodo(payload)"
      />
      <NewTodo
        v-if="editingId == 0"
        v-on:create-todo="(payload) => createTodo(payload)"
      />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NewTodo from "../components/NewTodo.vue";
import TodoList from "../components/TodoList.vue";

export default Vue.extend({
  components: {
    NewTodo,
    TodoList,
  },
  data: () => {
    return {
      todoList: [
        {
          id: 1,
          title: "test1",
          status: true,
        },
        {
          id: 2,
          title: "test2",
          status: false,
        },
        {
          id: 3,
          title: "test3",
          status: false,
        },
      ],
      editingId: 0,
    };
  },
  methods: {
    createTodo: function (payload: string) {
      let temp = {
        id: this.todoList.length + 1,
        title: payload,
        status: false,
      };
      this.todoList.push(temp);
    },
    toggleStatus: function (payload: number) {
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i].id == payload) {
          const temp = this.todoList[i];
          temp.status = !temp.status;
          this.todoList[i] = temp;
        }
      }
    },
    updateTodo: function (payload: { id: number; title: string }) {
      this.editingId = 0;
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i].id == payload.id) {
          const temp = this.todoList[i];
          temp.title = payload.title;
          this.todoList[i] = temp;
        }
      }
      //update todo
    },
    editTodo: function (payload: number) {
      this.editingId = payload;
    },
    deleteTodo: function (payload: number) {
      console.log("fuck");
      for (let i = 0; i < this.todoList.length; i++) {
        if (this.todoList[i].id == payload) {
          this.todoList.splice(i, 1);
        }
      }
    },
  },
});
</script>
