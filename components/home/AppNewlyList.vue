<template>
  <ol class="grid grid-cols-270 gap-9 mt-9">
    <li class="" v-for="car in items" :key="car.id">
      <NewlyItem :item="car" :isActive="onItem == car.id" />
    </li>
    <slot></slot>
  </ol>
  
</template>


<script>

import NewlyItem from "@/components/home/NewlyItem.vue";
import { onMounted, reactive, ref } from "@vue/composition-api";
import { useEventListener, useThrottleFn } from "@vueuse/core";
export default {
  components: {
    NewlyItem,
  },
  props: {
    items: {
      type: Array,
    },
  },
  setup() {
    const onItem = ref(null);

    function mouseWatch(e) {
      function traverseToSection(element, maxSteps, ms) {
        let section;
        for (let i = 0; i < maxSteps; i++) {
          if (element?.nodeName === "SECTION") {
            section = element;
            break;
          }
          element = element?.parentElement;
        }

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
};
</script>

<style>
</style>