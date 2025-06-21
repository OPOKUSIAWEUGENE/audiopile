<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="orange-line"></div>
      <div class="footer-main">
        <div class="footer-top">
          <img src="@/assets/shared/desktop/logo.svg" alt="audiophile" class="logo" />
          <nav class="footer-nav">
            <router-link to="/" class="nav-link">HOME</router-link>
            <router-link to="/category/headphones" class="nav-link">HEADPHONES</router-link>
            <router-link to="/category/speakers" class="nav-link">SPEAKERS</router-link>
            <router-link to="/category/earphones" class="nav-link">EARPHONES</router-link>
          </nav>
        </div>
        
        <div class="footer-info">
          <p class="description">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>
          
          <div class="footer-bottom">
            <p class="copyright">Copyright 2021. All Rights Reserved</p>
            <div class="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <img src="@/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <img src="@/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <img src="@/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  background-color: #101010;
  padding: 52px 24px;
  color: #FFFFFF;
}

.footer-content {
  max-width: 1110px;
  margin: 0 auto;
  position: relative;
}

.orange-line {
  width: 101px;
  height: 4px;
  background: #D87D4A;
  margin-bottom: 48px;
}

.footer-main {
  text-align: center;
}

.footer-top {
  margin-bottom: 48px;
}

.logo {
  display: inline-block;
  height: 25px;
  margin-bottom: 48px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
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

.description {
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  margin-bottom: 48px;
  font-weight: 500;
}

.copyright {
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  margin-bottom: 48px;
  font-weight: 700;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.social-link {
  display: flex;
  align-items: center;
  transition: filter 0.3s ease;
}

.social-link:hover {
  filter: brightness(0) saturate(100%) invert(56%) sepia(71%) saturate(429%) hue-rotate(338deg) brightness(91%) contrast(92%);
}

.social-link img {
  width: 24px;
  height: 24px;
}

@media (min-width: 768px) {
  .footer {
    padding: 60px 40px;
  }

  .footer-content {
    text-align: left;
  }

  .footer-main {
    text-align: left;
  }

  .footer-top {
    margin-bottom: 32px;
  }

  .logo {
    margin-bottom: 32px;
  }

  .footer-nav {
    flex-direction: row;
    gap: 34px;
    align-items: flex-start;
  }

  .description {
    margin-bottom: 80px;
    max-width: 689px;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    margin-bottom: 0;
  }
}

@media (min-width: 1110px) {
  .footer {
    padding: 75px 0;
  }

  .footer-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }

  .footer-top {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  .logo {
    margin-bottom: 0;
  }

  .footer-nav {
    margin: 0;
  }

  .footer-info {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
  }

  .description {
    max-width: 540px;
    margin-bottom: 56px;
  }

  .footer-bottom {
    width: 100%;
  }
}
</style> 