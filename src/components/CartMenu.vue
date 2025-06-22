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
  top: 89px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.cart-content {
  position: absolute;
  top: 89px;
  right: 40px;
  width: 377px;
  background: white;
  border-radius: 8px;
  padding: 31px 28px;
  margin-top: 24px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
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
  grid-template-columns: 64px 1fr 96px;
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
  height: 48px;
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

@media (min-width: 768px) {
  .cart-content {
    width: 480px;
    padding: 42px;
  }

  .cart-header {
    margin-bottom: 32px;
  }

  .cart-header h2 {
    font-size: 20px;
    letter-spacing: 1.5px;
  }

  .cart-item {
    grid-template-columns: 84px 1fr 116px;
    gap: 20px;
    margin-bottom: 28px;
  }

  .item-image {
    width: 84px;
    height: 84px;
  }

  .item-info h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .item-info .price {
    font-size: 15px;
  }

  .quantity-selector {
    width: 116px;
    height: 38px;
  }

  .quantity-selector button {
    font-size: 15px;
  }

  .quantity-selector span {
    font-size: 15px;
  }

  .cart-total {
    margin-bottom: 32px;
  }

  .cart-total span {
    font-size: 16px;
  }

  .total-amount {
    font-size: 20px !important;
  }

  .checkout-button {
    height: 52px;
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .cart-content {
    right: 50%;
    transform: translateX(50%);
  }
}
</style> 