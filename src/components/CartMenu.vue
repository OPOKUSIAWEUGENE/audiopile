<template>
  <div class="cart-menu">
    <div class="cart-overlay" @click="$emit('close')"></div>
    <div class="cart-content">
      <div class="cart-header">
        <h2>CART ({{ cartStore.totalItems }})</h2>
        <button v-if="cartStore.items.length > 0" class="remove-all" @click="cartStore.removeAll">Remove all</button>
      </div>

      <div v-if="cartStore.items.length > 0" class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="require(`@/${item.image}`)" :alt="item.name" />
          </div>
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p class="price">$ {{ item.price.toLocaleString() }}</p>
          </div>
          <div class="quantity-selector">
            <button @click="cartStore.decrementQuantity(item.id)" class="quantity-btn">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="cartStore.incrementQuantity(item.id)" class="quantity-btn">+</button>
          </div>
        </div>
      </div>

      <div v-else class="empty-cart">
        <p>Your cart is empty</p>
      </div>

      <template v-if="cartStore.items.length > 0">
        <div class="cart-total">
          <span>TOTAL</span>
          <span class="total-amount">$ {{ cartStore.total.toLocaleString() }}</span>
        </div>

        <router-link to="/checkout" class="checkout-button" @click="$emit('close')">
          CHECKOUT
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CartMenu',
  emits: ['close'],
  setup() {
    const cartStore = useCartStore()
    
    return {
      cartStore
    }
  }
}
</script>

<style scoped>
.cart-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
}

.cart-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.cart-content {
  position: absolute;
  top: 90px;
  right: 24px;
  width: calc(100% - 48px);
  max-width: 377px;
  background: white;
  border-radius: 8px;
  padding: 32px 28px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.cart-header h2 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  margin: 0;
}

.remove-all {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
}

.remove-all:hover {
  color: #D87D4A;
}

.empty-cart {
  text-align: center;
  padding: 32px 0;
  color: rgba(0, 0, 0, 0.5);
}

.cart-items {
  margin-bottom: 32px;
}

.cart-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
}

.cart-item:last-child {
  margin-bottom: 0;
}

.item-image {
  width: 64px;
  height: 64px;
  background: #F1F1F1;
  border-radius: 8px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info h3 {
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 8px;
}

.item-info .price {
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

.quantity-selector {
  display: flex;
  align-items: center;
  background: #F1F1F1;
  padding: 15px;
  gap: 20px;
}

.quantity-btn {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.quantity-btn:hover {
  color: #D87D4A;
}

.quantity-selector span {
  font-size: 13px;
  font-weight: 700;
  min-width: 16px;
  text-align: center;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.cart-total span {
  font-size: 15px;
  text-transform: uppercase;
}

.cart-total span:first-child {
  color: rgba(0, 0, 0, 0.5);
}

.total-amount {
  font-weight: 700;
  font-size: 18px !important;
}

.checkout-button {
  display: block;
  width: 100%;
  background: #D87D4A;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background: #FBAF85;
}

@media (max-width: 768px) {
  .cart-content {
    right: 50%;
    transform: translateX(50%);
  }
}
</style> 