<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderSection />
    <main>
      <router-view />
    </main>
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
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
/* nav a {
  margin-right: 10px;
} */
</style>
