<template>
  <button
    @click="toogleNav"
    :aria-label="
      navOpen ? 'Open site navigation' : 'Close site navigation'
    "
    class="fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 xl:hidden flex items-center justify-center rounded-full bg-gray-900  focus:outline-none focus:ring-2 shadow-xl"
  >
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current text-gray-300 "
      >
        <path
          v-if="!navOpen"
          d="M4 8H20M4 16H20"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          v-if="navOpen"
          class=" text-gray-300  stroke-current"
          d="M6 18L18 6M6 6L18 18"
          stroke="#4A5568"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters('ui/',[
            'navOpen',
        ])
    },
    methods: {
        ...mapMutations('ui/',[
            'toogleNav', //also supports payload `this.nameOfMutation(amount)` 
        ])
    },
};


</script>

<style>
</style>