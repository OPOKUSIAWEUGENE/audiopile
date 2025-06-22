<template>
  <article class="product-card">
    <div class="product-image">
      <picture>
        <source media="(min-width: 1110px)" :srcset="require(`@/${product.categoryImage.desktop.slice(2)}`)" />
        <source media="(min-width: 768px)" :srcset="require(`@/${product.categoryImage.tablet.slice(2)}`)" />
        <img :src="require(`@/${product.categoryImage.mobile.slice(2)}`)" :alt="product.name" />
      </picture>
    </div>
    <div class="product-content">
      <span v-if="product.new" class="overline">NEW PRODUCT</span>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <router-link :to="'/product/' + product.slug" class="btn btn-primary">
        SEE PRODUCT
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-card {
  margin-bottom: 120px;
  text-align: center;
}

.product-image {
  background: #F1F1F1;
  border-radius: 8px;
  padding: 0;
  margin-bottom: 32px;
  overflow: hidden;
}

.product-image picture {
  display: block;
  width: 100%;
}

.product-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.product-content {
  padding: 0 24px;
}

.overline {
  color: #D87D4A;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 24px;
}

h2 {
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 24px;
  font-weight: 700;
}

p {
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
  font-weight: 500;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 48px;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #D87D4A;
  color: #FFFFFF;
  border: none;
}

.btn-primary:hover {
  background-color: #FBAF85;
}

@media (min-width: 768px) {
  .product-card {
    margin-bottom: 120px;
  }

  .product-image {
    margin-bottom: 52px;
    height: 352px;
  }

  .product-image img {
    height: 100%;
    object-fit: cover;
  }

  .product-content {
    padding: 0;
    max-width: 572px;
    margin: 0 auto;
  }

  .overline {
    font-size: 12px;
    letter-spacing: 8.57px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.5px;
    margin-bottom: 32px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    margin-bottom: 32px;
    max-width: 572px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1110px) {
  .product-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 125px;
    align-items: center;
    text-align: left;
    margin-bottom: 160px;
  }

  .product-card:nth-child(even) {
    direction: rtl;
  }

  .product-card:nth-child(even) .product-content {
    direction: ltr;
  }

  .product-image {
    margin-bottom: 0;
    height: 560px;
  }

  .product-image img {
    height: 100%;
    object-fit: cover;
  }

  .product-content {
    padding: 0;
    max-width: none;
  }
}
</style> 