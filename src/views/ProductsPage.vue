<template>
  <div class="products-page">
    <header class="page-header">
      <h1>{{ categoryTitle }}</h1>
    </header>
    
    <div class="products-grid">
      <ProductCard
        v-for="product in categoryProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="category-links">
      <router-link to="/category/headphones" class="category-link">
        <div class="category-image">
          <img src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />
        </div>
        <h3>HEADPHONES</h3>
        <div class="shop-link">
          SHOP
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
        </div>
      </router-link>

      <router-link to="/category/speakers" class="category-link">
        <div class="category-image">
          <img src="@/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" />
        </div>
        <h3>SPEAKERS</h3>
        <div class="shop-link">
          SHOP
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
        </div>
      </router-link>

      <router-link to="/category/earphones" class="category-link">
        <div class="category-image">
          <img src="@/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" />
        </div>
        <h3>EARPHONES</h3>
        <div class="shop-link">
          SHOP
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
        </div>
      </router-link>
    </div>

    <InfoSection class="info-section" />
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
import ProductCard from '@/components/ProductCard.vue'
import InfoSection from '@/components/InfoSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import productsData from '@/stores/data.json'

export default {
  name: 'ProductsPage',
  components: {
    ProductCard,
    InfoSection,
    FooterSection
  },
  computed: {
    category() {
      return this.$route.params.category
    },
    categoryTitle() {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1)
    },
    categoryProducts() {
      return productsData
        .filter(product => product.category === this.category)
        .sort((a, b) => b.new - a.new)
    }
  },
  watch: {
    '$route'() {
      // Scroll to top when route changes
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.products-page {
  background-color: #FAFAFA;
  padding-top: 90px; /* Account for fixed header */
}

.page-header {
  background-color: #141414;
  padding: 32px 0;
  text-align: center;
  margin-bottom: 64px;
  position: relative;
}

.page-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.page-header h1 {
  color: #FFFFFF;
  font-size: 28px;
  line-height: normal;
  letter-spacing: 2px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
}

.products-grid {
  padding: 0 24px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.category-links {
  padding: 0 24px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.category-link {
  background: #F1F1F1;
  border-radius: 8px;
  padding: 88px 0 22px;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: inherit;
}

.category-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 160px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.category-image img {
  width: 130px;
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

.category-link h3 {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1.07px;
  font-weight: 700;
  margin: 0 0 17px;
}

.shop-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  transition: color 0.3s ease;
}

.shop-link:hover {
  color: #D87D4A;
}

.arrow-icon {
  width: 8px;
  height: 12px;
}

.info-section {
  margin-bottom: 120px;
}

@media (min-width: 768px) {
  .page-header {
    padding: 98px 0;
    margin-bottom: 120px;
  }

  .page-header h1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.429px;
  }

  .products-grid {
    padding: 0 40px;
    gap: 120px;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  .category-links {
    padding: 0 40px;
    flex-direction: row;
    gap: 10px;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  .category-link {
    flex: 1;
    padding: 88px 0 22px;
  }

  .category-image {
    width: 140px;
    height: 140px;
    top: -40px;
  }

  .category-image img {
    width: 100px;
  }

  .info-section {
    padding: 0 40px;
  }
}

@media (min-width: 1110px) {
  .products-grid,
  .category-links {
    padding: 0;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
  }

  .category-links {
    gap: 30px;
  }
}
</style> 