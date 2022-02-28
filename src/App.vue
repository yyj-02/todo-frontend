<template>
  <v-app class="container-center">
    <v-container
      class="mt-10 mb-5 d-flex justify-center"
      style="max-width: 400px; position: relative"
    >
      <h1>Todo 📒</h1>
      <v-switch
        v-model="$vuetify.theme.dark"
        style="position: absolute; top: 0; right: 15px"
      ></v-switch>
    </v-container>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      //
    };
  },
});
</script>
