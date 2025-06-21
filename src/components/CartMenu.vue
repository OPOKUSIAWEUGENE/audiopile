<template>
  <div class="cart-menu">
    <div class="cart-overlay" @click="$emit('close')"></div>
    <div class="cart-content">
      <div class="cart-header">
        <h2>CART ({{ cartItems.length }})</h2>
        <button class="remove-all" @click="removeAll">Remove all</button>
      </div>

      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="require(`@/${item.image.mobile.slice(2)}`)" :alt="item.name" />
          </div>
          <div class="item-info">
            <h3>{{ item.name.split(' ')[0] }}</h3>
            <p class="price">$ {{ item.price.toLocaleString() }}</p>
          </div>
          <div class="quantity-selector">
            <button @click="updateQuantity(item, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item, item.quantity + 1)">+</button>
          </div>
        </div>
      </div>

      <div class="cart-total">
        <span>TOTAL</span>
        <span>$ {{ totalPrice.toLocaleString() }}</span>
      </div>

      <router-link to="/checkout" class="checkout-button" @click="$emit('close')">
        CHECKOUT
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartMenu',
  emits: ['close'],
  data() {
    return {
      cartItems: [
        {
          id: 4,
          name: 'XX99 MK II',
          price: 2999,
          image: {
            mobile: './assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
          },
          quantity: 1
        },
        {
          id: 2,
          name: 'XX59',
          price: 899,
          image: {
            mobile: './assets/product-xx59-headphones/mobile/image-product.jpg'
          },
          quantity: 2
        },
        {
          id: 1,
          name: 'YX1',
          price: 599,
          image: {
            mobile: './assets/product-yx1-earphones/mobile/image-product.jpg'
          },
          quantity: 1
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  methods: {
    removeAll() {
      this.cartItems = []
    },
    updateQuantity(item, newQuantity) {
      if (newQuantity < 1) {
        this.cartItems = this.cartItems.filter(i => i.id !== item.id)
      } else {
        item.quantity = newQuantity
      }
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
  padding: 8px;
  gap: 20px;
}

.quantity-selector button {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
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

.cart-total span:first-child {
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}

.cart-total span:last-child {
  font-size: 18px;
  font-weight: 700;
}

.checkout-button {
  display: block;
  width: 100%;
  background: #D87D4A;
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 0;
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