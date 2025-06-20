<template>
  <section class="hero">
    <div class="hero-content">
      <span class="new-product">NEW PRODUCT</span>
      <h1>XX99 MARK II<br>HEADPHONES</h1>
      <p>Experience natural, lifelike audio and exceptional<br>build quality made for the passionate music<br>enthusiast.</p>
      <button class="see-product">SEE PRODUCT</button>
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
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('@/assets/home/desktop/image-hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.new-product {
  font-size: 14px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
  display: block;
}

h1 {
  font-size: 56px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

p {
  font-size: 15px;
  line-height: 1.67;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 40px;
  max-width: 350px;
}

.see-product {
  background-color: #D87D4A;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.see-product:hover {
  background-color: #FBAF85;
}

@media (max-width: 768px) {
  .hero {
    background-image: url('@/assets/home/tablet/image-header.jpg');
  }

  .hero-content {
    text-align: center;
    padding: 0 40px;
  }

  h1 {
    font-size: 36px;
  }

  p {
    margin: 0 auto 40px;
  }

  p br {
    display: none;
  }
}

@media (max-width: 375px) {
  .hero {
    height: 600px;
    background-image: url('@/assets/home/mobile/image-header.jpg');
  }

  h1 {
    font-size: 36px;
  }

  .hero-content {
    padding: 0 24px;
  }
}
</style> 