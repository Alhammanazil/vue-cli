/* eslint-disable */

<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <product-list :products="products" :maximum="maximum"> </product-list>
  </div>
</template>

<script>
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductList from "./components/ProductList.vue";

// library.add(faShoppingCart);

export default {
  name: "App",
  data: function () {
    return {
      maximum: 50,
      products: [],
    };
  },
  components: {
    ProductList,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>
