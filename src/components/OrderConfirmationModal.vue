<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <div class="check-icon">
          <img src="@/assets/checkout/icon-order-confirmation.svg" alt="Order confirmed" />
        </div>

        <h2 class="title">
          THANK YOU<br />
          FOR YOUR ORDER
        </h2>

        <p class="confirmation-message">
          You will receive an email confirmation shortly.
        </p>

        <div class="order-summary">
          <div class="items-summary">
            <div class="main-item">
              <div class="item-info">
                <img 
                  v-if="firstItem?.image"
                  :src="require(`@/${firstItem.image}`)" 
                  :alt="firstItem.name" 
                  class="item-image" 
                />
                <img 
                  v-else
                  src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" 
                  alt="Default product" 
                  class="item-image" 
                />
                <div class="item-details">
                  <h3>{{ formatProductName(firstItem?.name || '') }}</h3>
                  <p class="price">$ {{ Number(firstItem?.price || 0).toLocaleString() }}</p>
                </div>
                <span class="quantity">x{{ firstItem?.quantity || 0 }}</span>
              </div>
              
              <div v-if="otherItemsCount > 0" class="other-items">
                <div class="divider"></div>
                <p>and {{ otherItemsCount }} other item(s)</p>
              </div>
            </div>

            <div class="grand-total">
              <span>GRAND TOTAL</span>
              <span class="amount">$ {{ Number(grandTotal).toLocaleString() }}</span>
            </div>
          </div>
        </div>

        <router-link to="/" custom v-slot="{ navigate }">
          <button class="back-home" @click="handleBackToHome(navigate)">
            BACK TO HOME
          </button>
        </router-link>
      </div>
    </div>
  </Transition>
</template>

<script>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

export default {
  name: 'OrderConfirmationModal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const router = useRouter()
    const cartStore = useCartStore()
    return { router, cartStore }
  },
  computed: {
    firstItem() {
      return this.cartStore.items[0] || {}
    },
    otherItemsCount() {
      return Math.max(0, this.cartStore.items.length - 1)
    },
    grandTotal() {
      return (this.cartStore.total || 0) + 50 // Adding shipping cost
    }
  },
  methods: {
    formatProductName(name) {
      if (!name) return ''
      return name.split(' ').slice(0, -1).join(' ')
    },
    handleBackToHome(navigate) {
      // First clear the cart
      this.cartStore.clearCart()
      // Then navigate home
      navigate()
    }
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 32px;
  width: calc(100% - 48px);
  max-width: 540px;
  margin: 24px;
  margin-top: 120px;
}

.check-icon {
  width: 64px;
  height: 64px;
  background: #D87D4A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 23px;
}

.check-icon img {
  width: 26px;
  height: 26px;
}

.title {
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.86px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #000000;
}

.confirmation-message {
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 24px;
  font-weight: 500;
}

.order-summary {
  margin-bottom: 23px;
  border-radius: 8px;
  overflow: hidden;
}

.items-summary {
  background: #F1F1F1;
}

.main-item {
  padding: 24px;
}

.item-info {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
}

.item-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  background: #ffffff;
}

.item-details h3 {
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  margin: 0;
  color: #000000;
}

.price {
  font-size: 14px;
  line-height: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

.quantity {
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 12px 0;
}

.other-items {
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
}

.grand-total {
  background: #000000;
  color: #FFFFFF;
  padding: 15px 24px;
}

.grand-total span {
  display: block;
}

.grand-total span:first-child {
  font-size: 15px;
  line-height: 25px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 8px;
}

.grand-total .amount {
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
}

.back-home {
  width: 100%;
  height: 48px;
  background: #D87D4A;
  color: #FFFFFF;
  border: none;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-home:hover {
  background: #FBAF85;
}

@media (max-width: 767px) {
  .modal-content {
    margin: 24px;
    padding: 32px;
    margin-top: 103px;
  }

  .check-icon {
    margin-bottom: 23px;
  }

  .title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  .confirmation-message {
    margin-bottom: 24px;
  }

  .order-summary {
    margin-bottom: 23px;
  }

  .main-item {
    padding: 24px;
  }
}
</style> 