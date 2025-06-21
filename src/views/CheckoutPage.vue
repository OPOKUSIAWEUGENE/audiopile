<template>
  <div class="checkout-page">
    <div class="container">
      <button class="go-back" @click="$router.go(-1)">Go Back</button>
      
      <h1>CHECKOUT</h1>
      
      <form @submit.prevent="handleSubmit" class="checkout-form">
        <section class="billing-details">
          <h2>BILLING DETAILS</h2>
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="formData.name" placeholder="Alexei Ward" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="formData.email" placeholder="alexei@mail.com" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" v-model="formData.phone" placeholder="+1 202-555-0136" required>
            </div>
          </div>
        </section>

        <section class="shipping-info">
          <h2>SHIPPING INFO</h2>
          <div class="form-grid">
            <div class="form-group full-width">
              <label for="address">Your Address</label>
              <input type="text" id="address" v-model="formData.address" placeholder="1137 Williams Avenue" required>
            </div>
            <div class="form-group">
              <label for="zipCode">ZIP Code</label>
              <input type="text" id="zipCode" v-model="formData.zipCode" placeholder="10001" required>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" v-model="formData.city" placeholder="New York" required>
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input type="text" id="country" v-model="formData.country" placeholder="United States" required>
            </div>
          </div>
        </section>

        <section class="payment-details">
          <h2>PAYMENT DETAILS</h2>
          <div class="form-grid">
            <div class="form-group payment-method">
              <label>Payment Method</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="formData.paymentMethod" value="e-Money" checked>
                  <span>e-Money</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="formData.paymentMethod" value="cash">
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
            <template v-if="formData.paymentMethod === 'e-Money'">
              <div class="form-group">
                <label for="eMoneyNumber">e-Money Number</label>
                <input type="text" id="eMoneyNumber" v-model="formData.eMoneyNumber" placeholder="238521993" required>
              </div>
              <div class="form-group">
                <label for="eMoneyPin">e-Money PIN</label>
                <input type="password" id="eMoneyPin" v-model="formData.eMoneyPin" placeholder="6891" required>
              </div>
            </template>
          </div>
        </section>

        <div class="summary">
          <h2>SUMMARY</h2>
          <div class="cart-items">
            <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
              <div class="item-image">
                <img :src="require(`@/${item.image}`)" :alt="item.name" />
              </div>
              <div class="item-details">
                <h3>{{ item.name.split(' ').slice(0, -1).join(' ') }}</h3>
                <p class="price">$ {{ item.price.toLocaleString() }}</p>
              </div>
              <span class="quantity">x{{ item.quantity }}</span>
            </div>
          </div>

          <div class="summary-totals">
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
          </div>

          <button type="submit" class="continue-pay">
            CONTINUE & PAY
          </button>
        </div>
      </form>
    </div>

    <OrderConfirmationModal :show="showConfirmation" />
  </div>

  <FooterSection>
      <template #nav>
        <div>
          <strong>audiophile</strong>
          <nav>
            <router-link to="/">HOME</router-link>
            <router-link to="/category/headphones">HEADPHONES</router-link>
            <router-link to="/category/speakers">SPEAKERS</router-link>
            <router-link to="/category/earphones">EARPHONES</router-link>
          </nav>
        </div>
      </template>
      <template #info>
        <p>Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
      </template>
      <template #copyright>
        <small>Copyright 2021. All Rights Reserved</small>
      </template>
      <template #socials>
        <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
      </template>
    </FooterSection>
</template>

<script>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import FooterSection from '@/components/FooterSection.vue'
import OrderConfirmationModal from '@/components/OrderConfirmationModal.vue'

export default {
  name: 'CheckoutPage',
  components: {
    FooterSection,
    OrderConfirmationModal
  },
  setup() {
    const cartStore = useCartStore()
    const showConfirmation = ref(false)
    const formData = ref({
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: 'e-Money',
      eMoneyNumber: '',
      eMoneyPin: ''
    })

    const handleSubmit = () => {
      // In a real app, you would validate the form and process the payment here
      showConfirmation.value = true
    }

    return {
      cartStore,
      formData,
      showConfirmation,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.checkout-page {
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

.checkout-form {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
}

h2 {
  color: #D87D4A;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.form-grid {
  display: grid;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.21px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  height: 56px;
  padding: 0 24px;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="password"]:focus {
  border-color: #D87D4A;
  outline: none;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
  cursor: pointer;
}

.radio-label input[type="radio"] {
  margin: 0;
}

.summary {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
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
  margin: 0;
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

.summary-totals {
  margin-bottom: 32px;
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
  margin-top: 16px;
}

.grand-total span:first-child {
  text-transform: uppercase;
}

.grand-total .amount {
  color: #D87D4A;
}

.continue-pay {
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

.continue-pay:hover {
  background: #FBAF85;
}

@media (min-width: 768px) {
  .checkout-page {
    padding-top: 120px;
  }

  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1110px) {
  .checkout-page {
    padding-top: 160px;
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }

  h1 {
    grid-column: 1 / -1;
  }

  .go-back {
    grid-column: 1 / -1;
  }
}
</style> 