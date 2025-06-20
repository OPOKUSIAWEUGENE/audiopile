<template>
  <section class="info">
    <div class="info-content">
      <div class="info-text">
        <h2>BRINGING YOU THE<br>BEST <span>AUDIO GEAR</span></h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <div class="info-image">
        <picture>
          <source media="(min-width: 769px)" srcset="@/assets/shared/desktop/image-best-gear.jpg">
          <source media="(min-width: 376px)" srcset="@/assets/shared/tablet/image-best-gear.jpg">
          <img src="@/assets/shared/mobile/image-best-gear.jpg" alt="Best audio gear">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoSection'
}
</script>

<style scoped>
.info {
  max-width: 1110px;
  margin: 200px auto;
  padding: 0 24px;
}

.info-content {
  display: flex;
  align-items: center;
  gap: 125px;
}

.info-text {
  flex: 1;
}

.info-text h2 {
  font-size: 40px;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 32px;
  text-transform: uppercase;
}

.info-text h2 span {
  color: #D87D4A;
}

.info-text p {
  font-size: 15px;
  line-height: 1.67;
  color: rgba(0, 0, 0, 0.5);
}

.info-image {
  flex: 1;
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .info {
    margin: 96px auto;
    padding: 0 40px;
  }

  .info-content {
    flex-direction: column-reverse;
    gap: 63px;
    text-align: center;
  }

  .info-text h2 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  .info-text p {
    max-width: 573px;
    margin: 0 auto;
  }
}

@media (max-width: 375px) {
  .info {
    margin: 120px auto;
    padding: 0 24px;
  }

  .info-content {
    gap: 40px;
  }

  .info-text h2 {
    font-size: 28px;
    margin-bottom: 32px;
  }

  .info-text p {
    margin: 0;
  }

  .info-image img {
    min-height: 300px;
  }
}
</style> 