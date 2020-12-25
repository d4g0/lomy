<template>
  <form class="relative focus:shadow-none h-full  " @submit.prevent="''" action="">
    <div class="absolute top-0 h-full w-8 flex items-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-ligth-dimmed opacity-50 ml-2"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
        />
      </svg>
    </div>

    <input
      type="text"
      name="search"
      id=""
      class="border border-gray-400-2 h-full px-8 py-2 w-full rounded-og focus:outline-none focus:ring-2 ring-amber-500"
      placeholder="Search"
      v-model="search.item"
    />

    <div class="absolute top-0 right-0 z-20 h-full w-8 flex items-center">
      <button @click="clear" v-if="search.item.length">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current stroke-current text-ligth-dimmed opacity-50"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<script>
import {ref, reactive, toRef } from "@vue/composition-api";

export default {
  components: {},
  computed: {},
  setup() {
    const search = ref({
      item:''
    });

    function clear() {
      search.value.item = "";
    }

    return { search, clear };
  },
};
</script>

<style>
</style>