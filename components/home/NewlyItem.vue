<template>
  <section
    :id="item.id"
    @mouseover.stop=""
    class="w-full rounded-kush pb-3 cursor-pointer transition-all duration-100 ease-linear"
  >
    <div class="flex flex-col ">
      <div class="relative">
        <transition name="fade">
          <div
            class="absolute inset-0 w-full rounded-kush h-full  bg-gray-900 bg-opacity-40 flex justify-center"
            v-if="isActive"
          >
          <button class="absolute bottom-4 py-3 px-5 bg-gray-200 bg-opacity-90 rounded-og text-sm hover:bg-opacity-100 transition-all duration-150 ease-linear ">See details</button>
          </div>
        </transition>
        <AppImage :image="{ src: item.img, alt: item.imgAlt, imgClasses: ' rounded-kush '+imgClases }" />
      </div>
      <div class="w-full px-3 flex items-baseline justify-between">
        <h1 class="mt-4 text-lg sm:text-base">{{ item.name }}</h1>
       
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: 0,
          img: "/img/trucks-xl.jpg",
          imgAlt: "the bus is comming",
          name: "Trucks",
          count: 10,
        };
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgClases() {
      return this.isActive ? ' shadow-xl ' : ''
    }
  },
};
</script>

<style>
</style>