<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="before"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row d-none mb-3 align-items-center"
      v-for="(item, index) in showItem"
      :key="index"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add-item', item)">+</button>
      </div>
      <div class="col-sm-4">
        <img :src="item.image" :alt="item.name" class="img-fluid d-block" />
      </div>
      <div class="col">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)" :precision="2"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "product-list",
  components: {
    Price,
  },
  props: ["products", "maximum"],
  computed: {
    showItem() {
      return this.products.filter((item) => item.price <= this.maximum);
    },
  },
  methods: {
    before(el) {
      el.className = "d-none";
    },
    enter(el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave(el) {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>
