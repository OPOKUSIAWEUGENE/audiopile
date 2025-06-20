<template>
  <section class="categories">
    <div class="categories-container">
      <div class="category-card">
        <div class="category-image">
          <img src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" />
        </div>
        <h2>HEADPHONES</h2>
        <a href="#" class="shop-link">
          SHOP
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow right" class="arrow-icon" />
        </a>
      </div>

      <div class="category-card">
        <div class="category-image">
          <img src="@/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" />
        </div>
        <h2>SPEAKERS</h2>
        <a href="#" class="shop-link">
          SHOP
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow right" class="arrow-icon" />
        </a>
      </div>

      <div class="category-card">
        <div class="category-image">
          <img src="@/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" />
        </div>
        <h2>EARPHONES</h2>
        <a href="#" class="shop-link">
          SHOP
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow right" class="arrow-icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryCards'
}
</script>

<style scoped>
.categories {
  padding: 120px 24px 0;
  margin: 0 auto;
  max-width: 1110px;
}

.categories-container {
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-image {
  position: absolute;
  top: -52px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 160px;
}

.category-image img {
  width: 100%;
  height: auto;
}

h2 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.3px;
  margin-bottom: 15px;
  color: #000000;
}

.shop-link {
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
}

.shop-link:hover {
  color: #D87D4A;
}

.arrow-icon {
  width: 8px;
  height: 12px;
}

@media (max-width: 768px) {
  .categories {
    padding: 96px 40px 0;
  }

  .categories-container {
    gap: 10px;
  }

  .category-card {
    padding: 88px 0 22px;
  }

  .category-image {
    width: 120px;
    height: 120px;
    top: -40px;
  }
}

@media (max-width: 375px) {
  .categories {
    padding: 84px 24px 0;
  }

  .categories-container {
    grid-template-columns: 1fr;
    gap: 68px;
  }

  .category-card {
    padding: 88px 0 22px;
  }
}
</style> 