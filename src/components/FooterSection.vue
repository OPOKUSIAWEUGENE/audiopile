<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="orange-line"></div>
        <img src="@/assets/shared/desktop/logo.svg" alt="audiophile" class="logo" />
        <nav class="footer-nav">
          <router-link to="/" class="nav-link">HOME</router-link>
          <router-link to="/headphones" class="nav-link">HEADPHONES</router-link>
          <router-link to="/speakers" class="nav-link">SPEAKERS</router-link>
          <router-link to="/earphones" class="nav-link">EARPHONES</router-link>
        </nav>
      </div>

      <div class="footer-main">
        <div class="footer-info">
          <p class="description">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
          <p class="copyright">Copyright 2021. All Rights Reserved</p>
        </div>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <img src="@/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <img src="@/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <img src="@/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
};
</script>

<style scoped>
.footer {
  background-color: #101010;
  color: white;
  padding: 75px 0 48px;
}

.footer-content {
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-top {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  margin-bottom: 36px;
}

.orange-line {
  position: absolute;
  top: -75px;
  left: 0;
  width: 101px;
  height: 4px;
  background-color: #D87D4A;
}

.logo {
  height: 25px;
}

.footer-nav {
  display: flex;
  gap: 34px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 25px;
  transition: color 0.3s ease;
  text-transform: uppercase;
}

.nav-link:hover {
  color: #D87D4A;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-info {
  max-width: 540px;
  text-align: left;
}

.description {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  margin-bottom: 56px;
  opacity: 0.5;
}

.copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  line-height: 25px;
  font-weight: 700;
  opacity: 0.5;
}

.social-links {
  display: flex;
  gap: 16px;
  align-items: center;
}

.social-link {
  transition: filter 0.3s ease;
  display: flex;
  align-items: center;
}

.social-link:hover {
  filter: brightness(0) saturate(100%) invert(56%) sepia(71%) saturate(429%) hue-rotate(338deg) brightness(91%) contrast(92%);
}

.social-link img {
  width: 24px;
  height: 24px;
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }

  .footer-nav {
    flex-direction: row;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 46px;
  }

  .orange-line {
    top: -60px;
  }

  .description {
    margin-bottom: 80px;
  }

  .footer-main {
    flex-direction: column;
    gap: 32px;
  }

  .social-links {
    align-self: flex-end;
  }
}

@media (max-width: 375px) {
  .footer {
    padding: 52px 0;
  }

  .footer-top {
    align-items: center;
    margin-bottom: 48px;
    text-align: center;
  }

  .footer-nav {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .orange-line {
    left: 50%;
    transform: translateX(-50%);
    top: -52px;
  }

  .footer-main {
    gap: 48px;
  }

  .social-links {
    align-self: center;
  }
}
</style> 