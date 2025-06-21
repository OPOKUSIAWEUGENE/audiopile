<template>
  <div class="cart-page">
    <div class="container">
      <button class="go-back" @click="$router.go(-1)">Go Back</button>
      
      <h1>CART ({{ cartStore.totalItems }})</h1>
      
      <div class="cart-content" v-if="cartStore.items.length > 0">
        <div class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <div class="item-image">
              <img :src="require(`@/${item.image.slice(2)}`)" :alt="item.name" />
            </div>
            <div class="item-details">
              <h3>{{ formatProductName(item.name) }}</h3>
              <p class="price">$ {{ item.price.toLocaleString() }}</p>
            </div>
            <div class="quantity-selector">
              <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            </div>
          </div>
        </div>

        <div class="cart-summary">
          <div class="summary-row">
            <span>TOTAL</span>
            <span class="amount">$ {{ cartStore.totalPrice.toLocaleString() }}</span>
          </div>
          <div class="summary-row">
            <span>SHIPPING</span>
            <span class="amount">$ 50</span>
          </div>
          <div class="summary-row">
            <span>VAT (INCLUDED)</span>
            <span class="amount">$ {{ (cartStore.totalPrice * 0.2).toLocaleString() }}</span>
          </div>
          <div class="summary-row grand-total">
            <span>GRAND TOTAL</span>
            <span class="amount">$ {{ (cartStore.totalPrice + 50).toLocaleString() }}</span>
          </div>

          <div class="cart-actions">
            <button class="remove-all" @click="cartStore.clearCart()">Remove all</button>
            <router-link to="/checkout" class="checkout-button">
              CHECKOUT
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="empty-cart">
        <p>Your cart is empty</p>
        <router-link to="/" class="continue-shopping">
          CONTINUE SHOPPING
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'

export default {
  name: 'CartPage',
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  methods: {
    formatProductName(name) {
      return name.split(' ').slice(0, -1).join(' ')
    },
    updateQuantity(productId, newQuantity) {
      this.cartStore.updateQuantity(productId, newQuantity)
    }
  }
}
</script>

<style scoped>
.cart-page {
  background-color: #FAFAFA;
  padding: 90px 24px 24px;
  min-height: 100vh;
}

.container {
  max-width: 1110px;
  margin: 0 auto;
}

.go-back {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  cursor: pointer;
  padding: 16px 0;
  margin-bottom: 24px;
}

.go-back:hover {
  color: #D87D4A;
}

h1 {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.cart-content {
  display: grid;
  gap: 32px;
}

.cart-items {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
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

.item-details h3 {
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  margin: 0 0 4px;
}

.price {
  font-size: 14px;
  line-height: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

.quantity-selector {
  width: 96px;
  height: 32px;
  background: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
}

.quantity-selector button {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
}

.quantity-selector button:hover {
  color: #D87D4A;
}

.quantity-selector span {
  font-size: 13px;
  font-weight: 700;
}

.cart-summary {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.summary-row span:first-child {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
}

.amount {
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
}

.grand-total {
  margin-top: 24px;
  margin-bottom: 24px;
}

.grand-total span:first-child {
  text-transform: uppercase;
}

.grand-total .amount {
  color: #D87D4A;
}

.cart-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.remove-all {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  line-height: 25px;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}

.remove-all:hover {
  color: #D87D4A;
}

.checkout-button {
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background: #FBAF85;
}

.empty-cart {
  text-align: center;
  padding: 48px 0;
}

.empty-cart p {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
}

.continue-shopping {
  display: inline-flex;
  height: 48px;
  background: #D87D4A;
  color: #FFFFFF;
  border: none;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 32px;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.continue-shopping:hover {
  background: #FBAF85;
}

@media (min-width: 768px) {
  .cart-page {
    padding-top: 120px;
  }

  .cart-content {
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }

  h1 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.15px;
  }

  .cart-items,
  .cart-summary {
    padding: 32px;
  }
}

@media (min-width: 1110px) {
  .cart-page {
    padding-top: 160px;
  }
}
</style> 