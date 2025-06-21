<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <img src="../assets/shared/desktop/logo.svg" alt="audiophile" />
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">HOME</router-link>
          <router-link to="/headphones" class="nav-link">HEADPHONES</router-link>
          <router-link to="/speakers" class="nav-link">SPEAKERS</router-link>
          <router-link to="/earphones" class="nav-link">EARPHONES</router-link>
        </div>
        <router-link to="/cart" class="cart">
          <img src="../assets/shared/desktop/icon-cart.svg" alt="Cart" />
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>

<style scoped>
.header {
  background-color: #191919;
  height: 96px;
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
}

.nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
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

.nav-link:hover,
.nav-link.router-link-active {
  color: #D87D4A;
}

.cart {
  display: flex;
  align-items: center;
}

.cart img {
  width: 23px;
  height: 20px;
  transition: filter 0.3s ease;
}

.cart:hover img {
  filter: brightness(0.7);
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

  .nav-links {
    display: none;
  }
}
</style> 