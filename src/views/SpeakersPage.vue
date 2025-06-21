<template>
  <div class="speakers-page">
    <header class="page-header">
      <h1>SPEAKERS</h1>
    </header>
    
    <div class="products-grid">
      <ProductCard
        v-for="product in speakerProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="category-links">
      <router-link to="/category/headphones" class="category-link">
        <img src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />
        <span>HEADPHONES</span>
        <span class="shop-link">SHOP ></span>
      </router-link>
      <router-link to="/category/speakers" class="category-link">
        <img src="@/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" />
        <span>SPEAKERS</span>
        <span class="shop-link">SHOP ></span>
      </router-link>
      <router-link to="/category/earphones" class="category-link">
        <img src="@/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" />
        <span>EARPHONES</span>
        <span class="shop-link">SHOP ></span>
      </router-link>
    </div>
    
    <InfoSection />
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
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import InfoSection from '@/components/InfoSection.vue'
import productsData from '@/stores/data.json'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'SpeakersPage',
  components: {
    ProductCard,
    InfoSection,
    FooterSection
  },
  computed: {
    speakerProducts() {
      return productsData.filter(product => product.category === 'speakers')
        .sort((a, b) => b.new - a.new)
    }
  }
}
</script>

<style scoped>
.speakers-page {
  background-color: #FAFAFA;
}

.page-header {
  background-color: #000000;
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
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  /* gap: 120px; */
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
  padding: 22px;
  text-align: center;
  text-decoration: none;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.category-link img {
  width: 147px;
  height: auto;
  margin-top: -62px;
  margin-bottom: 8px;
}

.category-link span {
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1.07px;
  margin-bottom: 17px;
}

.shop-link {
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.shop-link:hover {
  color: #D87D4A;
}

@media (min-width: 768px) {
  .page-header {
    padding: 105px 0;
    margin-bottom: 120px;
  }

  .page-header h1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.429px;
  }

  .products-grid {
    padding: 0 40px;
    margin-bottom: 120px;
  }

  .category-links {
    padding: 0 40px;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  .category-link {
    flex: 1;
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

  .products-grid {
    margin-bottom: 160px;
  }
}
</style>