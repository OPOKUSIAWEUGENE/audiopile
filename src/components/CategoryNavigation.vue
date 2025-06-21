<template>
  <section class="category-nav">
    <div class="nav-grid">
      <router-link to="/category/headphones" class="nav-item">
        <img src="@/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" class="nav-image" />
        <span class="nav-label">HEADPHONES</span>
        <span class="nav-link">
          Shop
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
        </span>
      </router-link>

      <router-link to="/category/speakers" class="nav-item">
        <img src="@/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="Speakers" class="nav-image" />
        <span class="nav-label">SPEAKERS</span>
        <span class="nav-link">
          Shop
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
        </span>
      </router-link>

      <router-link to="/category/earphones" class="nav-item">
        <img src="@/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" class="nav-image" />
        <span class="nav-label">EARPHONES</span>
        <span class="nav-link">
          Shop
          <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
        </span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryNavigation'
}
</script>

<style scoped>
.category-nav {
  padding: 0 24px;
  margin-bottom: 120px;
}

.nav-grid {
  display: grid;
  gap: 68px;
  max-width: 327px;
  margin: 0 auto;
}

.nav-item {
  background: #F1F1F1;
  border-radius: 8px;
  padding: 88px 0 22px;
  text-align: center;
  position: relative;
  min-height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.nav-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

.nav-label {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1.07px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 17px;
  font-weight: 700;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #D87D4A;
}

.arrow-icon {
  width: 8px;
  height: 12px;
}

@media (min-width: 768px) {
  .category-nav {
    padding: 0 40px;
    margin-bottom: 96px;
  }

  .nav-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: none;
  }
}

@media (min-width: 1110px) {
  .category-nav {
    padding: 0;
    margin-bottom: 160px;
  }

  .nav-grid {
    gap: 30px;
    max-width: 1110px;
  }
}
</style> 