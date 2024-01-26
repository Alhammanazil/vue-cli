<template>
	<div>
		<h1><img width="50" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png" alt="external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo"/>ueShop()</h1><br>
		<navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"></navbar>
		<price-slider :sliderStatus="sliderStatus"></price-slider>
		<pre>
            <!-- <div>{{ JSON.stringify(products, null, 2) }}</div> -->
        </pre>
		<product-list :maximum="maximum" :products="products"></product-list>
	</div>
</template>

<script>
import ProductList from './ProductList.vue';
import PriceSlider from './PriceSlider.vue';
import Navbar from './Navbar.vue';

export default {
	name: 'products',
	props: [
		'products',
		'maximum',
		'cart',
		'cartQty',
		'cartTotal',
		'sliderStatus',
		'sliderState',
	],
	components: {
		Navbar,
		PriceSlider,
		ProductList,
	},
};
</script>
