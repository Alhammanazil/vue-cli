<template>
    <div>
        <h1><img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png" alt="external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo"/>ueShop()</h1><br>
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"
    ></navbar>
    <price-slider :sliderStatus="sliderStatus" v-model:maximum="max">
    </price-slider>
    <product-list :products="products" :maximum="maximum" @add-item="addItem">
    </product-list>
    </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import Navbar from "./Navbar.vue";

/* eslint-disable */
export default {
    name: "products",
    props: [
        "products",
        "maximum",
        "cart",
        "cartQty",
        "cartTotal",
        "sliderStatus",
        "sliderState"
    ],
    components: {
        Navbar,
        PriceSlider,
        ProductList,
    },
    methods: {
        toggleSlider: function () {
            this.$emit('toggle');
        },
        addItem: function (item) {
            this.$emit('add', item);
        },
        deleteItem: function (index) {
            this.$emit('delete', index);
        },
    }
}

</script>