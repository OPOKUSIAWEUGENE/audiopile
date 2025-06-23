<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-content-inner">
        <span class="overline">NEW PRODUCT</span>
        <h1>XX99 MARK II<br>HEADPHONES</h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <router-link to="/product/xx99-mark-two-headphones" class="btn btn-primary">
          SEE PRODUCT
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  background-color: #191919;
  background-image: url('../assets/home/desktop/image-hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 632px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 0;
}

.hero-content {
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 165px;
  width: 100%;
  position: relative;
}

.hero-content-inner {
  max-width: 398px;
  color: #FFFFFF;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.overline {
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
  display: block;
}

h1 {
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-weight: 700;
}

p {
  font-size: 15px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 40px;
  font-weight: 500;
  opacity: 0.75;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 700;
}

.btn-primary {
  background-color: #D87D4A;
  color: #FFFFFF;
  border: none;
}

.btn-primary:hover {
  background-color: #FBAF85;
}

@media (min-width: 1200px) {
  .hero {
    height: 900px;
    background-position: right 100px center;
    background-size: 1400px;
    margin-top: -97px;
    padding-top: 97px;
  }

  .hero::before {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.6) 15%,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0) 45%
    );
  }

  .hero-content {
    display: flex;
    align-items: center;
    padding: 0;
    max-width: 1110px;
    margin: 0 auto;
    justify-content: center;
  }

  .hero-content-inner {
    margin-left: 0;
    max-width: 380px;
    margin-top: -30px;
    margin-right: auto;
    padding-left: 80px;
  }

  h1 {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
    margin-bottom: 24px;
  }

  .overline {
    font-size: 14px;
    margin-bottom: 24px;
    letter-spacing: 10px;
  }

  p {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 40px;
    max-width: 349px;
  }
}

@media (max-width: 1110px) {
  .hero {
    padding: 0;
    background-image: url('../assets/home/tablet/image-header.jpg');
    text-align: center;
    justify-content: center;
    min-height: 729px;
  }

  .hero-content {
    padding: 0 40px;
    display: flex;
    justify-content: center;
  }

  .hero-content-inner {
    margin: 0 auto;
    padding-top: 126px;
  }

  h1 {
    font-size: 48px;
    line-height: 52px;
    margin-bottom: 24px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 0 24px;
    min-height: 600px;
    background-image: url('../assets/home/mobile/image-header.jpg');
  }

  .hero-content {
    padding-top: 108px;
  }

  h1 {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 24px;
  }

  .overline {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 28px;
  }

  p br {
    display: none;
  }
}
</style> 