<template>
  <div id="app" class="d-flex justify-center ma-3">
    <atom-spinner :animation-duration="1500" :size="150" color="#e91e63" />
  </div>
</template>

<script>
// To use minified css and js files instead of .vue single file components:
// import 'epic-spinners/dist/lib/epic-spinners.min.css'
// import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'

import { AtomSpinner } from "epic-spinners";
export default {
  components: {
    AtomSpinner,
  },
};
</script>
