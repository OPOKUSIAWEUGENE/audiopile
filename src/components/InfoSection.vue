<template>
  <section class="info-section">
    <div class="info-content">
      <picture>
        <source media="(min-width: 1110px)" srcset="@/assets/shared/desktop/image-best-gear.jpg">
        <source media="(min-width: 768px)" srcset="@/assets/shared/tablet/image-best-gear.jpg">
        <img src="@/assets/shared/mobile/image-best-gear.jpg" alt="Person wearing headphones">
      </picture>
      <div class="text-content">
        <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
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
.info-section {
  padding: 0 24px;
}

.info-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1110px;
  margin: 0 auto;
}

picture {
  width: 100%;
  margin-bottom: 40px;
}

img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.text-content {
  max-width: 573px;
}

h2 {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 32px;
  font-weight: 700;
}

h2 span {
  color: #D87D4A;
}

p {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  font-weight: 500;
}

@media (min-width: 768px) {
  .info-section {
    padding: 0 40px;
  }

  h2 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.5px;
    margin-bottom: 32px;
  }
}

@media (min-width: 1110px) {
  .info-section {
    padding: 0;
  }

  .info-content {
    flex-direction: row-reverse;
    gap: 125px;
    text-align: left;
  }

  picture {
    width: 540px;
    margin-bottom: 0;
  }

  .text-content {
    max-width: 445px;
  }
}
</style> 