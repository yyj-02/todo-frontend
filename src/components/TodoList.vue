<template>
  <v-container class="pa-0">
    <v-list>
      <template v-for="todo in todoList">
        <v-list-item class="pa-0" :key="todo.id">
          <EditTodo
            v-if="editingId == todo.id"
            v-on:update-todo="(payload) => updateTodo(todo.id, payload)"
            :todo="todo"
          />
          <TodoItem
            v-else
            v-on:toggle-status="(payload) => toggleStatus(todo.id)"
            v-on:edit-todo="(payload) => editTodo(todo.id)"
            v-on:delete-todo="(payload) => deleteTodo(todo.id)"
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
    },

    editingId: {
      default: 0,
    },
  },
  components: {
    TodoItem,
    EditTodo,
  },
  methods: {
    toggleStatus: function (id: number) {
      this.$emit("toggle-status", id);
    },
    updateTodo: function (id: number, title?: Record<string, unknown>) {
      this.$emit("update-todo", { id, title });
    },
    editTodo: function (id: number) {
      this.$emit("edit-todo", id);
    },
    deleteTodo: function (id: number) {
      this.$emit("delete-todo", id);
    },
  },
});
</script>
