<template>
  <v-container class="pa-0">
    <v-list>
      <template v-for="todo in todoList">
        <v-list-item class="pa-0" :key="todo._id">
          <EditTodo
            v-if="editingId == todo._id"
            v-on:update-todo="(payload) => updateTodo(todo._id, payload)"
            :todo="todo"
          />
          <TodoItem
            v-else
            v-on:toggle-status="(payload) => toggleStatus(todo._id)"
            v-on:edit-todo="(payload) => editTodo(todo._id)"
            v-on:delete-todo="(payload) => deleteTodo(todo._id)"
            :todo="todo"
          />
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "./TodoItem.vue";
import EditTodo from "./EditTodo.vue";

export default Vue.extend({
  props: {
    todoList: {
      default: [
        {
          _id: "1",
          title: "test1",
          status: true,
        },
        {
          _id: "2",
          title: "test2",
          status: false,
        },
        {
          _id: "3",
          title: "test3",
          status: false,
        },
      ],
    },

    editingId: {
      default: "",
    },
  },
  components: {
    TodoItem,
    EditTodo,
  },
  methods: {
    toggleStatus: function (id: string) {
      this.$emit("toggle-status", id);
    },
    updateTodo: function (id: string, title?: Record<string, unknown>) {
      this.$emit("update-todo", { id, title });
    },
    editTodo: function (id: string) {
      this.$emit("edit-todo", id);
    },
    deleteTodo: function (id: string) {
      this.$emit("delete-todo", id);
    },
  },
});
</script>
