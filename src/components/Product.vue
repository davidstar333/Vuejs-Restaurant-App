<template>
    <router-link :to=" { name: 'submenu', params: { id: product_title } }">
        <div class="product-container">
            <img v-bind:src="product_image">
            <div class="product-info-section">
                <div class="product-title">{{product_title}}</div>
                <div class="product-price">{{product_price}}</div>
            </div>

            <div class="product-description">{{product_description}}</div>

            <div class="mask"></div>
        </div>
    </router-link>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {};
  },
  props: {
    product_image: {
      type: String,
      default() {
        return "";
      }
    },
    product_title: {
      type: String,
      default() {
        return "";
      }
    },
    product_price: {
      type: String,
      default() {
        return "";
      }
    },
    product_description: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
<style>
a {
    text-decoration: none;
}
.product-container {
  margin: auto;
  width: 170px;
  min-width: 170px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  margin-right: 15px;
  position: relative;
}

.product-container img {
  width: 100%;
  max-width: 100%;
  height: 120px;
  object-fit: cover;
}

.product-info-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}

.product-info-section .product-title {
  font-family: "CircularStd-Medium";
  font-size: 13px;
  color: #242424;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 5px;
}

.product-info-section .product-price {
  font-family: "CircularStd-Medium";
  font-size: 13px;
  color: #50e3c2;
}

.product-description {
  font-family: "CircularStd-Medium";
  font-size: 11.5px;
  color: #a1a1a1;
  padding: 5px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 60px;
}

.mask {
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0px;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5)
  );
}
</style>
