/* eslint-disable */
<template>
  <div id="app" class="container mt-5">
    <checkout
    :cart="cart"
    :cartTotal="cartTotal"
    @add="addItem"
    @delete="deleteItem"
    ></checkout>
    <products 
    :cart="cart"
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    :maximum="maximum"
    :products="products"
    :sliderStatus="sliderStatus"
    @toggle="toggleSliderStatus"
    @add="addItem"
    @delete="deleteItem"></products>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

export default {
  name: "app",
  data: function () {
    return {
      maximum: 150,
      products: [],
      cart: [],
      sliderStatus: false,
    };
  },
  components: {
    Checkout,
    Products,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    }
  },
  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },
    addItem: function (product) {
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
  },
};
</script>
/* eslint-disable */
