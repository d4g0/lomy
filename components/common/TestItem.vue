<template>
  <div
    class="w-full bg-gradient-to-tr py-10 from-gray-300 via-fuchsia-600 to-indigo-700"
  >
    <div class="w-full flex items-baseline justify-center">
      <h1 class="mt-20">Lets Test</h1>
      <input type="checkbox" name="show" v-model="state.show" class="ml-4" />
    </div>
    <div v-if="state.show">this is hided</div>
    <pre>{{isVisible}}</pre>
  </div>
</template>

<script>
import { reactive , ref} from "@vue/composition-api";

export default {

  data() {
    return {
      show: false,
    };
  },
  setup() {

    const state = ref({
      show:false
    });

    const isVisible = ref(false)

    return {
      // state,
      isVisible
    };
  },


};
</script>

<style>
</style>