<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="orange-line"></div>
        <img src="@/assets/shared/desktop/logo.svg" alt="audiophile" class="logo" />
        <nav class="footer-nav">
          <a href="#" class="nav-link">HOME</a>
          <a href="#" class="nav-link">HEADPHONES</a>
          <a href="#" class="nav-link">SPEAKERS</a>
          <a href="#" class="nav-link">EARPHONES</a>
        </nav>
      </div>

      <div class="footer-main">
        <div class="footer-info">
          <p class="description">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
          <p class="copyright">Copyright 2021. All Rights Reserved</p>
        </div>
        <div class="social-links">
          <a href="#" class="social-link">
            <img src="@/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
          </a>
          <a href="#" class="social-link">
            <img src="@/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
          </a>
          <a href="#" class="social-link">
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
  padding: 75px 0;
}

.footer-content {
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-top {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #D87D4A;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.footer-info {
  max-width: 540px;
}

.description {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  line-height: 1.67;
  margin-bottom: 56px;
}

.copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  font-weight: 700;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  transition: filter 0.3s ease;
}

.social-link:hover {
  filter: brightness(0) saturate(100%) invert(56%) sepia(71%) saturate(429%) hue-rotate(338deg) brightness(91%) contrast(92%);
}

.social-link img {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0;
  }

  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 32px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 16px;
  }

  .orange-line {
    top: -60px;
  }
}

@media (max-width: 375px) {
  .footer {
    padding: 52px 0;
    text-align: center;
  }

  .footer-top {
    align-items: center;
    margin-bottom: 48px;
  }

  .orange-line {
    left: 50%;
    transform: translateX(-50%);
    top: -52px;
  }

  .footer-main {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }

  .description {
    margin-bottom: 48px;
  }

  .social-links {
    margin-top: 8px;
  }
}
</style> 