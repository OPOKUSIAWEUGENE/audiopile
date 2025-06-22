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
                <div class="product-icon">
                  <img src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />
                </div>
                <div class="item-details">
                  <h3>XX99 MK II</h3>
                  <p class="price">$ 2,999</p>
                </div>
                <span class="quantity">x1</span>
              </div>
              
              <div class="divider"></div>
              <p class="other-items">and 2 other item(s)</p>
            </div>
          </div>

          <div class="grand-total">
            <span>GRAND TOTAL</span>
            <span class="amount">$ 5,446</span>
          </div>
        </div>

        <button class="back-home" @click="$router.push('/')">
          BACK TO HOME
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'OrderConfirmationModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
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
  background: #FFFFFF;
  border-radius: 8px;
  padding: 48px;
  width: 100%;
  max-width: 540px;
  margin-top: 124px;
}

.check-icon {
  width: 64px;
  height: 64px;
  background: #D87D4A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 33px;
}

.check-icon img {
  width: 26px;
  height: 19px;
}

.title {
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #000000;
}

.confirmation-message {
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 33px;
  font-weight: 500;
}

.order-summary {
  margin-bottom: 46px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
}

.items-summary {
  flex: 1.5;
}

.main-item {
  background: #F1F1F1;
  padding: 24px;
  height: 100%;
  border-radius: 8px 0 0 8px;
}

.item-info {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
}

.product-icon {
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.product-icon img {
  width: 100%;
  height: auto;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  margin-left: auto;
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
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

.grand-total {
  flex: 1;
  background: #000000;
  padding: 42px 24px;
  color: #FFFFFF;
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

/* Mobile Layout */
@media (max-width: 767px) {
  .modal-content {
    margin: 24px;
    padding: 32px;
    margin-top: 103px;
  }

  .title {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.86px;
  }

  .order-summary {
    flex-direction: column;
  }

  .main-item {
    border-radius: 8px 8px 0 0;
  }

  .grand-total {
    border-radius: 0 0 8px 8px;
    padding: 15px 24px;
  }
}

/* Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style> 