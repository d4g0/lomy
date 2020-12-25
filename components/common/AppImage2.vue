<template>
  <div ref="target" class="w-full overflow-hidden" >
    <!-- skeleton -->
    <div v-if="!loaded" class="bg-pulse" :class="skeleton.classes"  >
    </div>
    <transition name="fade">
      <AppImageItem
        :image="image"
        v-if="hasBeenVisible"
        v-show="loaded"
        v-on:loaded="onLoad"
        v-on:error="onError"
      />
    </transition>
  </div>
</template>

<script>

import { onMounted, ref } from "@vue/composition-api";
import {
  useElementVisibility,
  when,
  invoke,
  useEventListener,
} from "@vueuse/core";
import AppImageItem from "./AppImageItem.vue";

export default {
  components: { AppImageItem },
  props: {
    image: {
      type: Object,
      default() {
        return {
          src: "",
          alt: "",
          imgClasses: "",
        };
      },
    },
    skeleton: {
      type: Object,
      default() {
        return {
          width: 0,
          height: "",
          classes: "",
        };
      },
    },
  },
  setup({ skeleton }) {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);
    const hasBeenVisible = ref(false);
    const skeletonContainer = ref(null)

    invoke(async () => {
      await when(targetIsVisible).toBe(true);
      hasBeenVisible.value = true;
    });

    const loaded = ref(false);

    function onLoad(evt) {
      loaded.value = true;
    }

    function onError(){
      loaded.value = true;
    }



    return {
      target,
      targetIsVisible,
      hasBeenVisible,
      loaded,
      onLoad,
      onError,
    };
  },
};
</script>

<style scoped>
@keyframes pulse-bg-animation {
  0%,
  100% {
    background-color: rgb(241, 241, 241);
  }
  50% {
    background-color: #dddddd;
  }
}

.bg-pulse {
  animation: pulse-bg-animation 1.4s infinite;
}
</style>