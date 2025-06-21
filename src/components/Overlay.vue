<template>
  <Transition name="fade">
    <div v-if="show" class="overlay" @click="$emit('click')"></div>
  </Transition>
</template>

<script>
export default {
  name: 'DarkOverlay',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 90;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 