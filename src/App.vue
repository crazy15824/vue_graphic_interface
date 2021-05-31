<template>
  <div id="app">
    <Home />
    <!-- <Update /> -->
    <vue-notification-list position="top-right"></vue-notification-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from 'srcFolder/views/Home.vue';
//import Update from 'srcFolder/views/Update.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    //Update,
  }
});
</script>