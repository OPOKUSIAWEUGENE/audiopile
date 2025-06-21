<template>
  <div class="headphones-page">
    <header class="category-header">
      <h1>HEADPHONES</h1>
    </header>
    <main>
      <div class="container">
        <div class="products-grid">
          <ProductCard
            v-for="product in headphones"
            :key="product.id"
            :product="product"
          />
        </div>
        <CategoryCards class="category-cards" />
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
        <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
      </template>
    </FooterSection>
      </div>
    </main>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import CategoryCards from '@/components/CategoryCards.vue'
import InfoSection from '@/components/InfoSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import productsData from '@/stores/data.json'

export default {
  name: 'HeadphonesPage',
  components: {
    ProductCard,
    CategoryCards,
    InfoSection,
    FooterSection
  },
  computed: {
    headphones() {
      return productsData
        .filter(product => product.category === 'headphones')
        .sort((a, b) => {
          if (a.new && !b.new) return -1
          if (!a.new && b.new) return 1
          return 0
        })
    }
  }
}
</script>

<style scoped>
.headphones-page {
  padding-top: 90px;
}

.category-header {
  background-color: #191919;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
}

h1 {
  color: #FFFFFF;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 0;
}

.container {
  padding: 0 24px;
  max-width: 1110px;
  margin: 0 auto;
}

.products-grid {
  margin-bottom: 120px;
}

.category-cards {
  margin-bottom: 120px;
}

.info-section {
  margin-bottom: 120px;
}

@media (min-width: 768px) {
  .category-header {
    height: 246px;
    margin-bottom: 120px;
  }

  h1 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
  }

  .container {
    padding: 0 40px;
  }

  .category-cards {
    margin-bottom: 80px;
  }

  .info-section {
    margin-bottom: 96px;
  }
}

@media (min-width: 1110px) {
  .headphones-page {
    padding-top: 96px;
  }

  .category-header {
    height: 239px;
    margin-bottom: 160px;
  }

  .container {
    padding: 0;
  }

  .products-grid {
    margin-bottom: 160px;
  }

  .category-cards {
    margin-bottom: 120px;
  }

  .info-section {
    margin-bottom: 160px;
  }
}
</style> 