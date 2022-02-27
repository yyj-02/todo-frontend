<template>
  <v-container class="pa-0">
    <v-form v-model="todo">
      <v-container class="pa-0 d-flex align-baseline" style="max-width: 400px">
        <v-text-field
          class="ma-3 pa-0"
          v-model="title"
          label="New Todo"
          required
        >
        </v-text-field>
        <v-btn icon class="ma-3" small color="primary">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  //
});
</script>
