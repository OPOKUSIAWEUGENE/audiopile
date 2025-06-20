<template>
  <div>
    <HeroSection
      title="XX99 MARK II HEADPHONES"
      description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      buttonText="SEE PRODUCT"
      :image="heroImage"
      @see-product="goToProduct('xx99-mark-two-headphones')"
    />

    <CategoryCards :categories="categories" />

    <FeaturedProduct
      title="ZX9 SPEAKER"
      description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
      buttonText="SEE PRODUCT"
      :image="zx9Image"
      backgroundColor="#d87d4a"
      @see-product="goToProduct('zx9-speaker')"
    />

    <InfoSection
      title="BRINGING YOU THE BEST AUDIO GEAR"
      description="Located in the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
    />

    <FooterSection>
      <template #nav>
        <div>
          <strong>audiophile</strong>
          <nav>
            <router-link to="/">HOME</router-link>
            <router-link to="/category/headphones">HEADPHONES</router-link>
            <router-link to="/category/speakers">SPEAKERS</router-link>
            <router-link to="/category/earphones">EARPHONES</router-link>
          </nav>
        </div>
      </template>
      <template #info>
        <p>Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
      </template>
      <template #copyright>
        <small>Copyright 2021. All Rights Reserved</small>
      </template>
      <template #socials>
        <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
        <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
      </template>
    </FooterSection>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import CategoryCards from '../components/CategoryCards.vue';
import FeaturedProduct from '../components/FeaturedProduct.vue';
import InfoSection from '../components/InfoSection.vue';
import FooterSection from '../components/FooterSection.vue';
import data from '../stores/data.json';

function asset(path) {
  // Remove leading './' if present
  return require(`@/assets/${path.replace('./assets/', '')}`);
}

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    CategoryCards,
    FeaturedProduct,
    InfoSection,
    FooterSection
  },
  data() {
    return {
      heroImage: asset(data[3].image.mobile), // XX99 Mark II Headphones
      zx9Image: asset(data[5].image.mobile),
      zx7Image: asset(data[4].image.mobile),
      yx1Image: asset(data[0].image.mobile),
      categories: [
        {
          name: 'HEADPHONES',
          image: asset(data[1].categoryImage.mobile),
          link: '/category/headphones'
        },
        {
          name: 'SPEAKERS',
          image: asset(data[5].categoryImage.mobile),
          link: '/category/speakers'
        },
        {
          name: 'EARPHONES',
          image: asset(data[0].categoryImage.mobile),
          link: '/category/earphones'
        }
      ]
    };
  },
  methods: {
    goToProduct(slug) {
      this.$router.push(`/product/${slug}`);
    }
  }
};
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
