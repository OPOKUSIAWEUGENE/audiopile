<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav">
        <button class="hamburger" @click="toggleMobileMenu" aria-label="Toggle menu">
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
        <button class="cart" @click="toggleCart">
          <img src="../assets/shared/desktop/icon-cart.svg" alt="Cart" />
          <span v-if="totalItems > 0" class="cart-count">{{ totalItems }}</span>
        </button>
      </nav>
    </div>
    
    <!-- Cart Menu -->
    <CartMenu v-if="isCartOpen" @close="closeCart" />

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }" @click="closeMenu">
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
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { storeToRefs } from 'pinia'
import CartMenu from './CartMenu.vue'

export default {
  name: 'HeaderSection',
  components: {
    CartMenu
  },
  setup() {
    const isCartOpen = ref(false)
    const isMobileMenuOpen = ref(false)
    const categories = [
      { name: 'HEADPHONES', link: '/category/headphones' },
      { name: 'SPEAKERS', link: '/category/speakers' },
      { name: 'EARPHONES', link: '/category/earphones' }
    ]

    const cartStore = useCartStore()
    const { totalItems } = storeToRefs(cartStore)

    const toggleCart = () => {
      isCartOpen.value = !isCartOpen.value
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMenu = () => {
      isMobileMenuOpen.value = false
    }

    const closeCart = () => {
      isCartOpen.value = false
    }

    return {
      isCartOpen,
      isMobileMenuOpen,
      toggleCart,
      toggleMobileMenu,
      closeMenu,
      closeCart,
      categories,
      totalItems
    }
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
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
  position: relative;
}

.cart:hover {
  opacity: 0.7;
}

.cart img {
  width: 23px;
  height: 20px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #D87D4A;
  color: white;
  font-size: 11px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
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
  display: block;
}

.mobile-menu-content {
  background-color: #FFFFFF;
  padding: 56px 40px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
}

.mobile-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 100%;
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
    max-width: none;
  }

  .nav {
    justify-content: space-between;
    gap: 42px;
  }

  .nav-links {
    display: none;
  }

  .hamburger {
    display: block;
    margin-right: 0;
  }

  .logo {
    margin: 0;
  }

  .cart {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 24px;
  }

  .nav {
    gap: 0;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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

  .mobile-menu-content {
    padding: 84px 24px 35px;
  }

  .mobile-categories {
    grid-template-columns: 1fr;
    gap: 68px;
    max-width: 327px;
  }
}
</style> 