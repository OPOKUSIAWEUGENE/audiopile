<template>
  <div class="checkout-page">
    <div class="container">
      <button class="go-back" @click="$router.go(-1)">Go Back</button>
      
      <form @submit.prevent="handleSubmit" class="checkout-form" novalidate>
        <h1>CHECKOUT</h1>
        <section class="billing-details">
          <h2>BILLING DETAILS</h2>
          <div class="form-grid">
            <div class="form-group">
              <div class="label-group">
                <label for="name">Name</label>
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="Alexei Ward"
                :class="{ 'error': errors.name }"
                @blur="validateField('name')"
                required
              >
            </div>
            <div class="form-group">
              <div class="label-group">
                <label for="email">Email Address</label>
                <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
              </div>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="alexei@mail.com"
                :class="{ 'error': errors.email }"
                @blur="validateField('email')"
                required
              >
            </div>
            <div class="form-group">
              <div class="label-group">
                <label for="phone">Phone Number</label>
                <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
              </div>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                placeholder="+1 202-555-0136"
                :class="{ 'error': errors.phone }"
                @blur="validateField('phone')"
                required
              >
            </div>
          </div>
        </section>

        <section class="shipping-info">
          <h2>SHIPPING INFO</h2>
          <div class="form-grid">
            <div class="form-group full-width">
              <div class="label-group">
                <label for="address">Your Address</label>
                <span class="error-message" v-if="errors.address">{{ errors.address }}</span>
              </div>
              <input 
                type="text" 
                id="address" 
                v-model="formData.address" 
                placeholder="1137 Williams Avenue"
                :class="{ 'error': errors.address }"
                @blur="validateField('address')"
                required
              >
            </div>
            <div class="form-group">
              <div class="label-group">
                <label for="zipCode">ZIP Code</label>
                <span class="error-message" v-if="errors.zipCode">{{ errors.zipCode }}</span>
              </div>
              <input 
                type="text" 
                id="zipCode" 
                v-model="formData.zipCode" 
                placeholder="10001"
                :class="{ 'error': errors.zipCode }"
                @blur="validateField('zipCode')"
                required
              >
            </div>
            <div class="form-group">
              <div class="label-group">
                <label for="city">City</label>
                <span class="error-message" v-if="errors.city">{{ errors.city }}</span>
              </div>
              <input 
                type="text" 
                id="city" 
                v-model="formData.city" 
                placeholder="New York"
                :class="{ 'error': errors.city }"
                @blur="validateField('city')"
                required
              >
            </div>
            <div class="form-group">
              <div class="label-group">
                <label for="country">Country</label>
                <span class="error-message" v-if="errors.country">{{ errors.country }}</span>
              </div>
              <input 
                type="text" 
                id="country" 
                v-model="formData.country" 
                placeholder="United States"
                :class="{ 'error': errors.country }"
                @blur="validateField('country')"
                required
              >
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
                <div class="label-group">
                  <label for="eMoneyNumber">e-Money Number</label>
                  <span class="error-message" v-if="errors.eMoneyNumber">{{ errors.eMoneyNumber }}</span>
                </div>
                <input 
                  type="text" 
                  id="eMoneyNumber" 
                  v-model="formData.eMoneyNumber" 
                  placeholder="238521993"
                  :class="{ 'error': errors.eMoneyNumber }"
                  @blur="validateField('eMoneyNumber')"
                  required
                >
              </div>
              <div class="form-group">
                <div class="label-group">
                  <label for="eMoneyPin">e-Money PIN</label>
                  <span class="error-message" v-if="errors.eMoneyPin">{{ errors.eMoneyPin }}</span>
                </div>
                <input 
                  type="password" 
                  id="eMoneyPin" 
                  v-model="formData.eMoneyPin" 
                  placeholder="6891"
                  :class="{ 'error': errors.eMoneyPin }"
                  @blur="validateField('eMoneyPin')"
                  required
                >
              </div>
            </template>
            <template v-else>
              <div class="cash-on-delivery">
                <img src="@/assets/checkout/icon-cash-on-delivery.svg" alt="Cash on Delivery" />
                <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
              </div>
            </template>
          </div>
        </section>

        <div class="visually-hidden">
          <button type="submit" ref="submitButton"></button>
        </div>
      </form>

      <div class="summary">
        <h2>SUMMARY</h2>
        <div class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <div class="item-image">
              <img :src="require(`@/${item.image}`)" :alt="item.name" />
            </div>
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p class="price">$ {{ item.price.toLocaleString() }}</p>
            </div>
            <span class="quantity">x{{ item.quantity }}</span>
          </div>
        </div>

        <div class="summary-totals">
          <div class="summary-row">
            <span>TOTAL</span>
            <span class="amount">$ {{ cartStore.total?.toLocaleString() || '0' }}</span>
          </div>
          <div class="summary-row">
            <span>SHIPPING</span>
            <span class="amount">$ 50</span>
          </div>
          <div class="summary-row">
            <span>VAT (INCLUDED)</span>
            <span class="amount">$ {{ ((cartStore.total || 0) * 0.2).toLocaleString() }}</span>
          </div>
          <div class="summary-row grand-total">
            <span>GRAND TOTAL</span>
            <span class="amount">$ {{ ((cartStore.total || 0) + 50).toLocaleString() }}</span>
          </div>
        </div>

        <button 
          type="button"
          class="continue-pay" 
          :disabled="!cartStore.items.length"
          @click="handleSubmit"
        >
          CONTINUE & PAY
        </button>
      </div>
    </div>

    <OrderConfirmationModal 
      v-if="showConfirmation"
      :show="true"
    />
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
      <a href="#"><img src="@/assets/shared/desktop/icon-facebook.svg" alt="Facebook" /></a>
      <a href="#"><img src="@/assets/shared/desktop/icon-twitter.svg" alt="Twitter" /></a>
      <a href="#"><img src="@/assets/shared/desktop/icon-instagram.svg" alt="Instagram" /></a>
    </template>
  </FooterSection>
</template>

<script>
import { ref, reactive } from 'vue'
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
    const formData = reactive({
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

    const errors = reactive({
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      eMoneyNumber: '',
      eMoneyPin: ''
    })

    const validateEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validatePhone = (phone) => {
      return /^\+?[1-9]\d{1,14}$/.test(phone)
    }

    const validateField = (field) => {
      errors[field] = ''

      switch (field) {
        case 'name':
          if (!formData.name) {
            errors.name = 'Name is required'
          } else if (formData.name.length < 2) {
            errors.name = 'Name must be at least 2 characters'
          }
          break

        case 'email':
          if (!formData.email) {
            errors.email = 'Email is required'
          } else if (!validateEmail(formData.email)) {
            errors.email = 'Please provide a valid email'
          }
          break

        case 'phone':
          if (!formData.phone) {
            errors.phone = 'Phone number is required'
          } else if (!validatePhone(formData.phone)) {
            errors.phone = 'Please provide a valid phone number'
          }
          break

        case 'address':
          if (!formData.address) {
            errors.address = 'Address is required'
          } else if (formData.address.length < 5) {
            errors.address = 'Please provide a complete address'
          }
          break

        case 'zipCode':
          if (!formData.zipCode) {
            errors.zipCode = 'ZIP code is required'
          } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
            errors.zipCode = 'Please provide a valid ZIP code'
          }
          break

        case 'city':
          if (!formData.city) {
            errors.city = 'City is required'
          }
          break

        case 'country':
          if (!formData.country) {
            errors.country = 'Country is required'
          }
          break

        case 'eMoneyNumber':
          if (formData.paymentMethod === 'e-Money' && !formData.eMoneyNumber) {
            errors.eMoneyNumber = 'e-Money number is required'
          } else if (formData.paymentMethod === 'e-Money' && !/^\d{9}$/.test(formData.eMoneyNumber)) {
            errors.eMoneyNumber = 'Please provide a valid 9-digit e-Money number'
          }
          break

        case 'eMoneyPin':
          if (formData.paymentMethod === 'e-Money' && !formData.eMoneyPin) {
            errors.eMoneyPin = 'e-Money PIN is required'
          } else if (formData.paymentMethod === 'e-Money' && !/^\d{4}$/.test(formData.eMoneyPin)) {
            errors.eMoneyPin = 'Please provide a valid 4-digit PIN'
          }
          break
      }
    }

    const validateForm = () => {
      let isValid = true
      const fields = ['name', 'email', 'phone', 'address', 'zipCode', 'city', 'country']
      
      if (formData.paymentMethod === 'e-Money') {
        fields.push('eMoneyNumber', 'eMoneyPin')
      }

      fields.forEach(field => {
        validateField(field)
        if (errors[field]) {
          isValid = false
        }
      })

      return isValid
    }

    const handleSubmit = () => {
      if (validateForm()) {
        showConfirmation.value = true
      }
    }

    return {
      cartStore,
      formData,
      errors,
      showConfirmation,
      validateField,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.checkout-page {
  background: #F2F2F2;
  padding: 16px;
  margin-top: 89px;
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
  padding: 0;
  margin-bottom: 24px;
  transition: color 0.3s ease;
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
  color: #000000;
  font-weight: 700;
}

.checkout-form {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
}

section {
  margin-bottom: 32px;
}

section:last-child {
  margin-bottom: 0;
}

h2 {
  color: #D87D4A;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.93px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
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
  color: #000000;
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
  color: #000000;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="tel"]::placeholder,
input[type="password"]::placeholder {
  color: rgba(0, 0, 0, 0.4);
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="password"]:focus {
  border-color: #D87D4A;
  outline: none;
}

.payment-method {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
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
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
}

.radio-label:has(input:checked) {
  border-color: #D87D4A;
}

.radio-label input[type="radio"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 50%;
  margin: 0;
  position: relative;
}

.radio-label input[type="radio"]:checked {
  border-color: #D87D4A;
}

.radio-label input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #D87D4A;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.summary-row:last-child {
  margin-bottom: 0;
}

.summary-row span:first-child {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
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
  color: #000000;
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

.cash-on-delivery {
  grid-column: 1 / -1;
  display: flex;
  gap: 32px;
  align-items: center;
  margin-top: 8px;
}

.cash-on-delivery img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.cash-on-delivery p {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

@media (max-width: 767px) {
  .cash-on-delivery {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
}

@media (min-width: 768px) {
  .checkout-page {
    padding: 48px 40px 116px;
    margin-top: 97px;
  }

  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .payment-method {
    grid-column: 1 / -1;
  }

  h1 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
  }

  .checkout-form {
    padding: 30px;
  }
}

@media (min-width: 1110px) {
  .checkout-page {
    padding: 79px 0 141px;
  }

  .container {
    display: grid;
    grid-template-columns: 730px 350px;
    gap: 30px;
    align-items: start;
    position: relative;
  }

  .go-back {
    position: absolute;
    top: -38px;
    left: 0;
    margin-bottom: 0;
  }

  .checkout-form {
    padding: 54px 48px 48px;
    margin-bottom: 0;
    grid-column: 1;
  }

  .summary {
    grid-column: 2;
  }

  .form-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  section {
    margin-bottom: 53px;
  }

  h1 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
    margin-bottom: 41px;
  }

  h2 {
    margin-bottom: 16px;
  }

  .form-group {
    gap: 9px;
  }

  .payment-method {
    grid-template-columns: 280px 1fr;
    gap: 24px;
    align-items: flex-start;
  }

  .payment-method > label {
    margin-top: 18px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.21px;
  }

  .radio-group {
    gap: 16px;
  }

  .radio-label {
    padding: 18px 24px;
    border-radius: 8px;
    border: 1px solid #CFCFCF;
    transition: border-color 0.3s ease;
  }

  .radio-label:hover {
    border-color: #D87D4A;
  }

  .radio-label input[type="radio"] {
    width: 20px;
    height: 20px;
  }

  .radio-label span {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
    color: #000000;
  }

  .cash-on-delivery {
    margin-top: 30px;
    gap: 32px;
  }

  .summary {
    padding: 32px;
    position: sticky;
    top: 24px;
    height: fit-content;
  }

  .cart-items {
    margin-bottom: 32px;
  }

  .cart-item {
    margin-bottom: 24px;
  }

  .summary-totals {
    margin-bottom: 32px;
  }

  .summary-row {
    margin-bottom: 8px;
  }

  .grand-total {
    margin-top: 16px;
  }

  .continue-pay {
    height: 48px;
  }
}

.form-group.e-money-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  grid-column: 1 / -1;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.label-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
}

.error-message {
  color: #CD2C2C;
  font-size: 12px;
  font-weight: 500;
}

input.error {
  border-color: #CD2C2C;
}

input.error:focus {
  border-color: #CD2C2C;
  outline-color: #CD2C2C;
}
</style> 