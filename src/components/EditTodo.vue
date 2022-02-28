<template>
  <v-container class="pa-0">
    <v-form>
      <v-container class="pa-0 d-flex align-baseline" style="max-width: 400px">
        <v-text-field
          class="ma-3 pa-0"
          label="Changed Task"
          @keydown.enter="updateTodo()"
          v-model="newtitle"
          required
          autofocus
        >
        </v-text-field>
        <v-btn v-on:click="updateTodo()" icon class="ma-3" small color="teal">
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-container>
    </v-form>
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
  props: {
    todo: {
      default: {
        id: 1,
        title: "test1",
        status: true,
      },
    },
  },
  data: () => {
    return {
      newtitle: "",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    updateTodo: function () {
      if (this.newtitle.length == 0) {
        this.errorMessage = "Input cannot be empty";
        this.error = true;
      } else {
        this.$emit("update-todo", this.newtitle);
      }
    },
  },
});
</script>
