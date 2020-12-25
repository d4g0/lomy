<template>
  <img
    ref="img"
    :src="image.src"
    :alt="image.alt"
    :class="image.imgClasses "
  />
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "@vue/composition-api";

export default {
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

  setup(p, { emit }) {
    const img = ref(null);
    const error = ref(null);
    function onload(evt) {
      emit("loaded");
    }
    function onlerror(evt) {
      error.value = true
      emit("error");
    }

    onMounted(() => {
      img.value.onload = onload;
      img.value.onerror = onlerror;
    });

    onBeforeUnmount(() => {
      img.value.onload = null;
    });

    return {
      img,
      error
    };
  },
};
</script>

<style>
</style>