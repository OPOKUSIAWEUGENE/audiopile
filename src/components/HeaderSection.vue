<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav">
        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <img src="../assets/shared/tablet/icon-hamburger.svg" alt="" />
        </button>
        <router-link to="/" class="logo">
          <img src="../assets/shared/desktop/logo.svg" alt="audiophile" />
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">HOME</router-link>
          <router-link to="/category/headphones" class="nav-link">HEADPHONES</router-link>
          <router-link to="/category/speakers" class="nav-link">SPEAKERS</router-link>
          <router-link to="/category/earphones" class="nav-link">EARPHONES</router-link>
        </div>
        <router-link to="/cart" class="cart">
          <img src="../assets/shared/desktop/icon-cart.svg" alt="Cart" />
        </router-link>
      </nav>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }" @click="closeMenu">
      <div class="mobile-menu-content" @click.stop>
        <div class="mobile-categories">
          <div v-for="category in categories" :key="category.name" class="mobile-category-card">
            <div class="mobile-category-image">
              <img :src="require('@/assets/shared/desktop/image-category-thumbnail-' + category.name.toLowerCase() + '.png')" :alt="category.name">
            </div>
            <h3>{{ category.name }}</h3>
            <router-link :to="category.link" class="mobile-shop-link" @click="closeMenu">
              SHOP
              <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="" class="arrow-icon" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isMenuOpen: false,
      categories: [
        { name: 'HEADPHONES', link: '/category/headphones' },
        { name: 'SPEAKERS', link: '/category/speakers' },
        { name: 'EARPHONES', link: '/category/earphones' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : ''
    },
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.header {
  background-color: #191919;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.header-container {
  max-width: 1110px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}

.nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 16px;
  height: 15px;
}

.hamburger img {
  width: 16px;
  height: 15px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 25px;
}

.nav-links {
  display: flex;
  gap: 34px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #D87D4A;
}

.cart {
  display: flex;
  align-items: center;
}

.cart img {
  width: 23px;
  height: 20px;
}

/* Mobile Menu Styles */
.mobile-menu {
  display: none;
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 99;
}

.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  background-color: #FFFFFF;
  padding: 84px 24px 35px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
}

.mobile-categories {
  display: grid;
  gap: 68px;
  max-width: 327px;
  margin: 0 auto;
}

.mobile-category-card {
  background: #F1F1F1;
  border-radius: 8px;
  padding: 88px 0 22px;
  text-align: center;
  position: relative;
  min-height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-category-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.mobile-category-image img {
  width: 130px;
  height: auto;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15));
}

.mobile-category-card h3 {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1.07px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 17px;
  font-weight: 700;
}

.mobile-shop-link {
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

.mobile-shop-link:hover {
  color: #D87D4A;
}

.arrow-icon {
  width: 8px;
  height: 12px;
}

@media (max-width: 1110px) {
  .header-container {
    padding: 0 40px;
  }

  .nav-links {
    position: static;
    transform: none;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .header {
    height: 90px;
  }

  .header-container {
    padding: 0 24px;
  }

  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav {
    border-bottom: none;
  }

  .header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
}
</style> 