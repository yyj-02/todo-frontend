<template>
  <v-app>
    <v-container class="pa-0">
      <TodoList />
      <NewTodo />
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
    //
  },
  methods: {
    //
  },
});
</script>
