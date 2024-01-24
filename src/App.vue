<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <p class="animated fadeInRight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam
      quaerat ut molestiae dignissimos dolorum repellendus, cum et asperiores
      nostrum harum blanditiis dolores, quibusdam distinctio! Dolore, assumenda
      recusandae! Corrupti, dicta.
    </p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price :value="4.23"></price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Price from "./components/Price.vue";

library.add(faShoppingCart);

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    Price,
  },
};
</script>
