<template>
  <header class="header">
    <div class="header-content">
      <div class="header-left">
        <button class="menu-btn">
          <img src="@/assets/shared/tablet/icon-hamburger.svg" alt="Menu" />
        </button>
        <a href="/" class="logo">
          <img src="@/assets/shared/desktop/logo.svg" alt="audiophile" />
        </a>
      </div>

      <nav class="nav-desktop">
        <a href="/" class="nav-link">HOME</a>
        <a href="/headphones" class="nav-link">HEADPHONES</a>
        <a href="/speakers" class="nav-link">SPEAKERS</a>
        <a href="/earphones" class="nav-link">EARPHONES</a>
      </nav>

      <button class="cart-btn">
        <img src="@/assets/shared/desktop/icon-cart.svg" alt="Cart" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
};
</script>

<style scoped>
.header {
  background-color: #191919;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.header-content {
  max-width: 1110px;
  margin: 0 auto;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 42px;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.menu-btn img {
  width: 16px;
  height: 15px;
}

.logo {
  height: 25px;
}

.logo img {
  height: 100%;
}

.nav-desktop {
  display: flex;
  gap: 34px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #D87D4A;
}

.cart-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.cart-btn:hover {
  opacity: 0.7;
}

.cart-btn img {
  width: 23px;
  height: 20px;
}

@media (max-width: 1110px) {
  .header-content {
    padding: 32px 40px;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 32px 40px;
  }

  .menu-btn {
    display: block;
  }

  .nav-desktop {
    display: none;
  }
}

@media (max-width: 375px) {
  .header-content {
    padding: 32px 24px;
  }

  .header-left {
    gap: 24px;
  }

  .logo img {
    width: 143px;
    height: auto;
  }
}
</style> 