<template>
  <section class="info">
    <div class="info-content">
      <div class="info-text">
        <h2>BRINGING YOU THE<br>BEST <span>AUDIO GEAR</span></h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <div class="info-image">
        <picture>
          <source media="(min-width: 1024px)" :srcset="require('@/assets/shared/desktop/image-best-gear.jpg')">
          <source media="(min-width: 768px)" :srcset="require('@/assets/shared/tablet/image-best-gear.jpg')">
          <img :src="require('@/assets/shared/mobile/image-best-gear.jpg')" alt="Best audio gear">
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
  gap: 30px;
  justify-content: space-between;
}

.info-text {
  flex: 1;
  max-width: 445px;
  text-align: left;
}

.info-text h2 {
  font-size: 40px;
  line-height: 44px;
  font-weight: 700;
  letter-spacing: 1.43px;
  margin-bottom: 32px;
  text-transform: uppercase;
  color: #000000;
}

.info-text h2 span {
  color: #D87D4A;
}

.info-text p {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

.info-image {
  flex: 1;
  max-width: 540px;
  height: 588px;
  border-radius: 8px;
  overflow: hidden;
}

.info-image picture {
  width: 100%;
  height: 100%;
  display: block;
}

.info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1110px) {
  .info {
    margin: 96px auto;
  }

  .info-content {
    flex-direction: column-reverse;
    gap: 63px;
    text-align: center;
  }

  .info-text {
    max-width: 573px;
    width: 100%;
    text-align: center;
  }

  .info-text h2 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
    margin-bottom: 32px;
  }

  .info-image {
    width: 100%;
    max-width: 100%;
    height: 300px;
  }
}

@media (max-width: 767px) {
  .info {
    margin: 120px auto;
    padding: 0 24px;
  }

  .info-content {
    gap: 40px;
  }

  .info-text h2 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
  }

  .info-text p {
    font-size: 15px;
    line-height: 25px;
  }

  .info-image {
    height: 300px;
  }
}
</style> 