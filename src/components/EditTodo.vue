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
        >
        </v-text-field>
        <v-btn v-on:click="updateTodo()" icon class="ma-3" small color="teal">
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-container>
    </v-form>
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
    };
  },
  methods: {
    updateTodo: function () {
      this.$emit("update-todo", this.newtitle);
    },
  },
});
</script>
