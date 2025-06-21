<template>
  <section class="featured">
    <!-- ZX9 Speaker Feature -->
    <div class="featured-main">
      <div class="featured-main-content">
        <div class="featured-main-image">
          <img src="@/assets/home/desktop/image-speaker-zx9.png" alt="ZX9 SPEAKER" />
        </div>
        <div class="featured-main-text">
          <h2>ZX9<br>SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button class="btn-black">SEE PRODUCT</button>
        </div>
      </div>
      <img src="@/assets/home/desktop/pattern-circles.svg" alt="" class="circles-pattern" />
    </div>

    <!-- ZX7 Speaker Feature -->
    <div class="featured-secondary">
      <div class="featured-secondary-content">
        <h2>ZX7 SPEAKER</h2>
        <button class="btn-transparent">SEE PRODUCT</button>
      </div>
    </div>

    <!-- YX1 Earphones Feature -->
    <div class="featured-split">
      <div class="featured-split-image">
        <img src="@/assets/home/desktop/image-earphones-yx1.jpg" alt="YX1 EARPHONES" />
      </div>
      <div class="featured-split-content">
        <h2>YX1 EARPHONES</h2>
        <button class="btn-transparent">SEE PRODUCT</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedProduct'
}
</script>

<style scoped>
.featured {
  max-width: 1110px;
  margin: 120px auto 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* ZX9 Speaker Styles */
.featured-main {
  background-color: #D87D4A;
  border-radius: 8px;
  padding: 96px 95px 0;
  height: 560px;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.featured-main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  height: 100%;
}

.featured-main-image {
  margin-top: 96px;
  flex-shrink: 0;
}

.featured-main-image img {
  width: 410px;
  height: auto;
  margin-bottom: -14px;
}

.featured-main-text {
  max-width: 349px;
}

.featured-main-text h2 {
  color: white;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 2px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.featured-main-text p {
  color: white;
  opacity: 0.75;
  font-size: 15px;
  line-height: 1.67;
  margin-bottom: 40px;
}

.circles-pattern {
  position: absolute;
  top: -40px;
  left: -150px;
  z-index: 1;
  width: 944px;
  height: 944px;
}

/* ZX7 Speaker Styles */
.featured-secondary {
  background-image: url('@/assets/home/desktop/image-speaker-zx7.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 320px;
  padding: 0 95px;
  display: flex;
  align-items: center;
}

.featured-secondary-content h2 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;
  text-transform: uppercase;
}

/* YX1 Earphones Styles */
.featured-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.featured-split-image img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
}

.featured-split-content {
  background-color: #F1F1F1;
  border-radius: 8px;
  padding: 0 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-split-content h2 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;
  text-transform: uppercase;
}

/* Button Styles */
.btn-black {
  background: #000000;
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

.btn-black:hover {
  background: #4C4C4C;
}

.btn-transparent {
  background: transparent;
  color: #000000;
  border: 2px solid #000000;
  padding: 15px 30px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-transparent:hover {
  background: #000000;
  color: white;
}

@media (max-width: 1110px) {
  .featured {
    margin: 96px 40px 0;
    max-width: none;
  }

  /* ZX9 Speaker Tablet Styles */
  .featured-main {
    height: 720px;
    padding: 52px 0 0;
    text-align: center;
  }

  .featured-main-content {
    flex-direction: column;
    justify-content: flex-start;
    gap: 64px;
  }

  .featured-main-image {
    margin-top: 0;
  }

  .featured-main-image img {
    width: 197px;
    margin-bottom: 0;
  }

  .featured-main-text {
    padding: 0 24px;
  }

  .circles-pattern {
    width: 944px;
    height: 944px;
    top: -280px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* ZX7 Speaker Tablet Styles */
  .featured-secondary {
    background-image: url('@/assets/home/tablet/image-speaker-zx7.jpg');
    padding: 0 62px;
  }

  /* YX1 Earphones Tablet Styles */
  .featured-split-content {
    padding: 0 41px;
  }
}

@media (max-width: 768px) {
  .featured {
    margin: 120px 24px 0;
    max-width: none;
  }

  .featured-main {
    height: 600px;
    padding: 55px 0 0;
  }

  .featured-main-content {
    gap: 32px;
  }

  .featured-main-image img {
    width: 172px;
  }

  .featured-main-text h2 {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 24px;
  }

  .circles-pattern {
    width: 558px;
    height: 558px;
    top: -120px;
  }

  .featured-secondary {
    background-image: url('@/assets/home/mobile/image-speaker-zx7.jpg');
    padding: 0 24px;
  }

  .featured-split {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .featured-split-content {
    padding: 41px 24px;
  }
}

@media (max-width: 375px) {
  .featured {
    margin-top: 120px;
    padding: 0 24px;
    gap: 24px;
  }

  .featured-main {
    padding: 55px 24px 0;
    height: 600px;
  }

  .featured-main-image img {
    width: 172px;
    margin-bottom: 32px;
  }

  .featured-main-text h2 {
    font-size: 36px;
  }

  .featured-secondary {
    padding: 0 24px;
    background-image: url('@/assets/home/mobile/image-speaker-zx7.jpg');
  }

  .featured-split {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .featured-split-content {
    padding: 41px 24px;
  }

  .featured-split-image img {
    height: 200px;
  }
}
</style> 