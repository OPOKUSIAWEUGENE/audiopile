<template>
  <Transition name="toast">
    <div v-if="show" class="toast" :class="type">
      <slot></slot>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'AlertToast',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      default: 'success',
      validator: value => ['success', 'error', 'info'].includes(value)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #FFFFFF;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toast.success {
  border-left: 4px solid #D87D4A;
}

.toast.error {
  border-left: 4px solid #CD2C2C;
}

.toast.info {
  border-left: 4px solid #2C7BCD;
}

.toast-enter-active,
.toast-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  transform: translate(-50%, 100%);
  opacity: 0;
}
</style> 