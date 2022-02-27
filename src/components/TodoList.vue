<template>
  <v-container class="pa-0">
    <v-list>
      <template v-for="todo in todoList">
        <v-list-item class="pa-0" :key="todo.id">
          <TodoItem v-on:toggle-status="toggleStatus(todo.id)" :todo="todo" />
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import TodoItem from "./TodoItem.vue";

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
      ],
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    toggleStatus: function (id: number) {
      this.$emit("toggle-status", id);
    },
  },
});
</script>
