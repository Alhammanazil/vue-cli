import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";

library.add(
    faShoppingCart,
    faDollarSign
  );

createApp(App).mount("#app");