<template>
  <section class="categories">
    <div class="categories-container">
      <div v-for="category in categories" :key="category.name" class="category-card">
        <div class="category-image">
          <img :src="require('@/assets/shared/desktop/image-category-thumbnail-' + category.name.toLowerCase() + '.png')" :alt="category.name">
        </div>
        <h3>{{ category.name }}</h3>
        <router-link :to="category.link" class="shop-link">
          SHOP
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryCards',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.categories {
  padding: 200px 165px 0;
  background: #FFFFFF;
}

.categories-container {
  max-width: 1110px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.category-card {
  background: #F1F1F1;
  border-radius: 8px;
  padding: 116px 0 30px;
  text-align: center;
  position: relative;
  min-height: 204px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-image {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.category-image img {
  width: 170px;
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

h3 {
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
  font-weight: 700;
}

.shop-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

.shop-link:hover {
  color: #D87D4A;
}

.shop-link svg {
  margin-top: 1px;
}

@media (max-width: 1110px) {
  .categories {
    padding: 148px 40px 0;
  }

  .categories-container {
    gap: 10px;
  }

  .category-card {
    padding: 88px 0 24px;
  }

  .category-image {
    top: -52px;
    width: 148px;
    height: 148px;
  }

  .category-image img {
    width: 140px;
  }
}

@media (max-width: 768px) {
  .categories {
    padding: 92px 24px 0;
  }

  .categories-container {
    grid-template-columns: 1fr;
    gap: 68px;
    max-width: 327px;
  }

  .category-card {
    min-height: 165px;
    padding: 88px 0 22px;
  }

  .category-image {
    top: -50px;
    width: 140px;
    height: 140px;
  }

  .category-image img {
    width: 130px;
  }
}
</style> 