<template>
  <div class="product-detail-page">
    <div class="container">
      <button class="go-back" @click="$router.go(-1)">Go Back</button>
      
      <div class="product-main" v-if="product">
        <div class="product-image">
          <picture>
            <source :srcset="require(`@/${product.image.desktop.slice(2)}`)" media="(min-width: 1110px)" />
            <source :srcset="require(`@/${product.image.tablet.slice(2)}`)" media="(min-width: 768px)" />
            <img :src="require(`@/${product.image.mobile.slice(2)}`)" :alt="product.name" />
          </picture>
        </div>
        
        <div class="product-info">
          <span v-if="product.new" class="overline">NEW PRODUCT</span>
          <h1>{{ product.name }}</h1>
          <p class="description">{{ product.description }}</p>
          <p class="price">$ {{ product.price.toLocaleString() }}</p>
          
          <div class="add-to-cart">
            <div class="quantity-selector">
              <button @click="quantity > 1 && quantity--">-</button>
              <span>{{ quantity }}</span>
              <button @click="quantity++">+</button>
            </div>
            <button class="btn-primary" @click="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div class="features-box" v-if="product">
        <div class="product-features">
          <h2>FEATURES</h2>
          <p>{{ product.features }}</p>
        </div>

        <div class="in-the-box">
          <h2>IN THE BOX</h2>
          <ul>
            <li v-for="item in product.includes" :key="item.item">
              <span class="quantity">{{ item.quantity }}x</span>
              <span class="item">{{ item.item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="product-gallery" v-if="product">
        <picture class="gallery-item">
          <source :srcset="require(`@/${product.gallery.first.desktop.slice(2)}`)" media="(min-width: 1110px)" />
          <source :srcset="require(`@/${product.gallery.first.tablet.slice(2)}`)" media="(min-width: 768px)" />
          <img :src="require(`@/${product.gallery.first.mobile.slice(2)}`)" alt="Gallery image 1" />
        </picture>
        <picture class="gallery-item">
          <source :srcset="require(`@/${product.gallery.second.desktop.slice(2)}`)" media="(min-width: 1110px)" />
          <source :srcset="require(`@/${product.gallery.second.tablet.slice(2)}`)" media="(min-width: 768px)" />
          <img :src="require(`@/${product.gallery.second.mobile.slice(2)}`)" alt="Gallery image 2" />
        </picture>
        <picture class="gallery-item">
          <source :srcset="require(`@/${product.gallery.third.desktop.slice(2)}`)" media="(min-width: 1110px)" />
          <source :srcset="require(`@/${product.gallery.third.tablet.slice(2)}`)" media="(min-width: 768px)" />
          <img :src="require(`@/${product.gallery.third.mobile.slice(2)}`)" alt="Gallery image 3" />
        </picture>
      </div>

      <div class="you-may-also-like" v-if="product">
        <h2>YOU MAY ALSO LIKE</h2>
        <div class="suggestions">
          <div v-for="item in product.others" :key="item.slug" class="suggestion-item">
            <picture>
              <source :srcset="require(`@/${item.image.desktop.slice(2)}`)" media="(min-width: 1110px)" />
              <source :srcset="require(`@/${item.image.tablet.slice(2)}`)" media="(min-width: 768px)" />
              <img :src="require(`@/${item.image.mobile.slice(2)}`)" :alt="item.name" />
            </picture>
            <h3>{{ item.name }}</h3>
            <router-link :to="`/product/${item.slug}`" class="btn-primary">SEE PRODUCT</router-link>
          </div>
        </div>
      </div>

      <CategoryCards :categories="categories" />
      <InfoSection />
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
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <img src="@/assets/shared/desktop/icon-facebook.svg" alt="" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="@/assets/shared/desktop/icon-twitter.svg" alt="" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="@/assets/shared/desktop/icon-instagram.svg" alt="" />
          </a>
        </div>
      </template>
    </FooterSection>
  </div>
</template>

<script>
import CategoryCards from '@/components/CategoryCards.vue'
import InfoSection from '@/components/InfoSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import productsData from '@/stores/data.json'
import { useCartStore } from '@/stores/cart'

export default {
  name: 'ProductDetailPage',
  components: {
    CategoryCards,
    InfoSection,
    FooterSection
  },
  data() {
    return {
      quantity: 1,
      categories: [
        {
          name: 'HEADPHONES',
          link: '/category/headphones'
        },
        {
          name: 'SPEAKERS',
          link: '/category/speakers'
        },
        {
          name: 'EARPHONES',
          link: '/category/earphones'
        }
      ]
    }
  },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  computed: {
    product() {
      return productsData.find(p => p.slug === this.$route.params.slug)
    }
  },
  methods: {
    addToCart() {
      if (this.product) {
        this.cartStore.addToCart(this.product, this.quantity)
      }
    }
  }
}
</script>

<style scoped>
.product-detail-page {
  background-color: #FAFAFA;
  padding-top: 90px;
}

.container {
  padding: 0 24px;
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

.product-main {
  margin-bottom: 88px;
}

.product-image {
  background: #F1F1F1;
  border-radius: 8px;
  margin-bottom: 32px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
}

.overline {
  color: #D87D4A;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 24px;
}

h1 {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 24px;
  font-weight: 700;
}

.description {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
  font-weight: 500;
}

.price {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.29px;
  font-weight: 700;
  margin-bottom: 31px;
}

.add-to-cart {
  display: flex;
  gap: 16px;
}

.quantity-selector {
  width: 120px;
  height: 48px;
  background: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.quantity-selector button {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  padding: 15px;
  margin: -15px;
}

.quantity-selector button:hover {
  color: #D87D4A;
}

.quantity-selector span {
  font-size: 13px;
  font-weight: 700;
}

.btn-primary {
  background-color: #D87D4A;
  border: none;
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background-color: #FBAF85;
}

.features-box {
  margin-bottom: 88px;
}

.product-features {
  margin-bottom: 24px;
}

.product-features h2,
.in-the-box h2 {
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.86px;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-weight: 700;
}

.product-features p {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  white-space: pre-line;
}

.in-the-box {
  margin-bottom: 88px;
}

.in-the-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.in-the-box li {
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 25px;
}

.in-the-box .quantity {
  color: #D87D4A;
  font-weight: 700;
}

.in-the-box .item {
  color: rgba(0, 0, 0, 0.5);
}

.product-gallery {
  display: grid;
  gap: 20px;
  margin-bottom: 120px;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.you-may-also-like {
  margin-bottom: 120px;
  text-align: center;
}

.you-may-also-like h2 {
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.86px;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-weight: 700;
}

.suggestions {
  display: grid;
  gap: 56px;
}

.suggestion-item {
  text-align: center;
}

.suggestion-item picture {
  background: #F1F1F1;
  border-radius: 8px;
  margin-bottom: 32px;
  overflow: hidden;
  display: block;
}

.suggestion-item img {
  width: 100%;
  height: auto;
  display: block;
}

.suggestion-item h3 {
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 1.71px;
  text-transform: uppercase;
  margin-bottom: 32px;
  font-weight: 700;
}

.category-cards {
  margin-bottom: 120px;
}

.info-section {
  margin-bottom: 120px;
}

/* Add spacing between sections */
.categories {
  margin-bottom: 120px;
}

/* Add cart modal styles for tablet */
:deep(.cart-content) {
  position: absolute;
  top: 90px;
  right: 40px;
  width: 377px;
  background: white;
  border-radius: 8px;
  padding: 32px;
}

:deep(.cart-header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

:deep(.cart-header h2) {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  text-transform: uppercase;
  margin: 0;
}

:deep(.cart-items) {
  margin-bottom: 32px;
}

:deep(.cart-item) {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
}

:deep(.cart-item:last-child) {
  margin-bottom: 0;
}

:deep(.item-image) {
  width: 64px;
  height: 64px;
  background: #F1F1F1;
  border-radius: 8px;
  overflow: hidden;
}

:deep(.item-image img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.item-info h3) {
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 8px;
}

:deep(.item-info .price) {
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

:deep(.quantity-selector) {
  display: flex;
  align-items: center;
  background: #F1F1F1;
  padding: 15px;
  gap: 20px;
}

:deep(.quantity-selector button) {
  background: none;
  border: none;
  color: rgba(0, 0, 0, 0.25);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

:deep(.quantity-selector button:hover) {
  color: #D87D4A;
}

:deep(.quantity-selector span) {
  font-size: 13px;
  font-weight: 700;
  min-width: 16px;
  text-align: center;
}

:deep(.cart-total) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

:deep(.cart-total span) {
  font-size: 15px;
  text-transform: uppercase;
}

:deep(.cart-total span:first-child) {
  color: rgba(0, 0, 0, 0.5);
}

:deep(.total-amount) {
  font-weight: 700;
  font-size: 18px !important;
}

:deep(.checkout-button) {
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

:deep(.checkout-button:hover) {
  background: #FBAF85;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }

  .go-back {
    margin-bottom: 32px;
  }

  .product-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 69px;
    align-items: center;
    margin-bottom: 120px;
  }

  .product-image {
    margin-bottom: 0;
  }

  h1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
  }

  .product-features {
    margin-bottom: 120px;
  }

  .product-features h2,
  .in-the-box h2 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
    margin-bottom: 32px;
  }

  .in-the-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 69px;
    margin-bottom: 120px;
  }

  .product-gallery {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    margin-bottom: 120px;
  }

  .gallery-item:last-child {
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  .suggestions {
    grid-template-columns: repeat(3, 1fr);
    gap: 11px;
  }

  .categories {
    margin-bottom: 160px;
  }
}

@media (min-width: 1110px) {
  .container {
    padding: 0;
  }

  .go-back {
    margin-bottom: 56px;
    margin-top: 79px;
  }

  .product-main {
    gap: 125px;
    margin-bottom: 160px;
  }

  .product-image {
    max-width: 540px;
  }

  .product-info {
    max-width: 445px;
  }

  h1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
  }

  .description {
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
  }

  .features-box {
    display: grid;
    grid-template-columns: 635px 350px;
    gap: 125px;
    margin-bottom: 160px;
  }

  .product-features {
    margin-bottom: 0;
  }

  .product-features h2 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
    margin-bottom: 32px;
  }

  .product-features p {
    opacity: 0.5;
  }

  .in-the-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }

  .in-the-box h2 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
    margin-bottom: 4px;
  }

  .in-the-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .in-the-box li {
    display: flex;
    gap: 21px;
    margin-bottom: 2px;
    font-size: 15px;
    line-height: 25px;
  }

  .in-the-box li:last-child {
    margin-bottom: 0;
  }

  .in-the-box .quantity {
    color: #D87D4A;
    font-weight: 700;
    min-width: 25px;
  }

  .in-the-box .item {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
  }

  .product-gallery {
    display: grid;
    grid-template-columns: 445px 635px;
    grid-template-rows: 280px 280px;
    gap: 32px;
    margin-bottom: 160px;
  }

  .gallery-item:nth-child(1),
  .gallery-item:nth-child(2) {
    height: 280px;
  }

  .gallery-item:nth-child(3) {
    grid-column: 2;
    grid-row: 1 / span 2;
    height: 592px;
  }

  .gallery-item img {
    height: 100%;
    object-fit: cover;
  }

  .you-may-also-like {
    margin-bottom: 160px;
  }

  .you-may-also-like h2 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14px;
    margin-bottom: 64px;
  }

  .suggestions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .suggestion-item picture {
    width: 350px;
    height: 318px;
    margin-bottom: 40px;
  }

  .suggestion-item img {
    height: 100%;
    object-fit: cover;
  }

  .suggestion-item h3 {
    margin-bottom: 32px;
  }

  .category-cards {
    margin-bottom: 160px;
  }

  .info-section {
    margin-bottom: 160px;
  }
}

@media (max-width: 768px) {
  :deep(.cart-content) {
    right: 50%;
    transform: translateX(50%);
  }
}
</style> 