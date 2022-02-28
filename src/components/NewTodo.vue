<template>
  <v-container class="pa-0">
    <v-container class="pa-0 d-flex align-baseline" style="max-width: 400px">
      <v-text-field
        class="ma-3 pa-0"
        v-model="title"
        @keydown.enter="createTodo()"
        label="New Todo"
        required
      >
      </v-text-field>
      <v-btn v-on:click="createTodo()" icon class="ma-3" small color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
    <v-snackbar v-model="error">
      {{ errorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="error = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => {
    return {
      title: "",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    createTodo: function () {
      if (this.title.length == 0) {
        this.errorMessage = "Input cannot be empty";
        this.error = true;
      } else {
        this.$emit("create-todo", this.title);
        this.title = "";
      }
    },
  },
});
</script>
