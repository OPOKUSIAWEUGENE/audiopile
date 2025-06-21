<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderSection />
    <router-view />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection
  }
};
</script>

<style>
/* Optional global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Manrope', sans-serif;
}

#app {
  min-height: 100vh;
}

/* nav a {
  margin-right: 10px;
} */
</style>
