<template>
  <v-hover v-slot="{ hover }">
    <v-container
      :class="{ grey: hover }"
      class="pa-0 d-flex align-center"
      style="max-width: 400px"
    >
      <v-container
        class="ma-3 pa-0 body-1 text-decoration-line-through"
        v-if="todo.status"
        @click="toggleStatus(todo.id)"
      >
        {{ todo.title }}
      </v-container>
      <v-container class="ma-3 pa-0 body-1" v-else @click="toggleStatus()">
        {{ todo.title }}
      </v-container>
      <v-btn v-on:click="editTodo()" icon class="ma-3" small color="orange">
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>
      <v-btn v-on:click="deleteTodo()" icon class="ma-3" small color="red">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </v-container>
  </v-hover>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    todo: {
      default: {
        id: 1,
        title: "test1",
        status: true,
      },
    },
  },
  methods: {
    toggleStatus: function () {
      this.$emit("toggle-status");
    },
    editTodo: function () {
      this.$emit("edit-todo");
    },
    deleteTodo: function () {
      this.$emit("delete-todo");
    },
  },
});
</script>
