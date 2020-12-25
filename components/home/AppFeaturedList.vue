<template>
  <ol class="grid grid-cols-270 gap-9 mt-9">
    <li class="w-full" v-for="car in featuredCars" :key="car.id">
      <BuyItem :item="car" :isActive="onItem == car.id" class="" />
    </li>
    <slot></slot>
  </ol>
</template>

<script>
import BuyItem from "@/components/home/BuyItem.vue";
import { onMounted, reactive, ref } from "@vue/composition-api";
import { useEventListener, useThrottleFn } from "@vueuse/core";
export default {
  props: {
    featuredCars: {
      type: Array,
    },
  },
  setup() {
    const onItem = ref(null);

    function mouseWatch(e) {
      function traverseToSection(element, maxSteps, ms) {
        let section;
        try {
          for (let i = 0; i < maxSteps; i++) {
            if (element?.nodeName === "SECTION") {
              section = element;
              break;
            }
            element = element?.parentElement;
          }
        } catch (e) {}

        return section ? section : null;
      }

      const section = traverseToSection(e.target, 7);
      if (section) {
        onItem.value = section.id;
      } else {
        onItem.value = null;
      }
    }

    mouseWatch = useThrottleFn(mouseWatch, 100);

    useEventListener("mousemove", (evt) => {
      mouseWatch(evt);
    });

    return {
      onItem,
    };
  },
  components: {
    BuyItem,
  },
};
</script>

<style>
</style>