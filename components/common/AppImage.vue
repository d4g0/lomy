<template>
  <div ref="target" class="w-full overflow-hidden" :class="image.imgClasses">
    <div v-if="!loaded" class="bg-pulse min-h-64"></div>
    <transition name="fade">
      <AppImageItem
        :image="image"
        v-if="hasBeenVisible"
        v-show="loaded"
        v-on:loaded="onLoad"
      />
    </transition>
    <!-- <img
      ref="img"
      v-if="hasBeenVisible"
      :src="image.src"
      :alt="image.alt"
      :class="image.imgClasses"
    /> -->
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
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
  },
  setup() {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);
    const hasBeenVisible = ref(false);

    invoke(async () => {
      await when(targetIsVisible).toBe(true);
      hasBeenVisible.value = true;
    });

    const loaded = ref(false);

    function onLoad(evt) {
      loaded.value = true;
    }

    return {
      target,
      targetIsVisible,
      hasBeenVisible,
      loaded,
      onLoad,
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

  /* 80%{
    background-color: #b6b2b2;
  } */
}

.bg-pulse {
  animation: pulse-bg-animation 1.4s infinite;
}
</style>