<template>
  <div>
    <div class="max-w-screen-2xl mx-auto">
      <!-- intro -->
      <div class="md:px-12 relative">
        <!-- figures -->
        <div class="w-full relative h-44 md:h-64 lg:h-84">
          <!-- crane -->
          <div
            class="w-32 h-32 lg:h-64 lg:w-64 absolute top-4 left-6 md:left-84 sm:top-0 sm:left-64 lg:top-0 lg:left-96 xl:left-144 transition-all duration-300 ease-linear"
          >
            <SpotCrane class="absolute bottom-0" />
            <img
              loading="lazy"
              v-if="!mdReached"
              src="~assets/img/crane-sm.png"
              alt="One of our Cranes"
              class="absolute md:hidden"
            />
            <img
              loading="lazy"
              v-if="mdReached"
              src="~assets/img/crane.png"
              alt="One of our Cranes"
              class="absolute md:block"
            />
          </div>
          <!-- bus -->
          <div
            class="w-32 h-32 lg:h-64 lg:w-64 absolute bottom-0 right-1 sm:bottom-8 sm:right-20 transition-all duration-300 ease-linear"
          >
            <SpotBus class="absolute bottom-0" />
            <img
              loading="lazy"
              v-if="!mdReached"
              src="~assets/img/bus-sm.png"
              alt="One of our DAF busses"
              class="absolute md:hidden"
            />
            <img
              loading="lazy"
              v-if="mdReached"
              src="~assets/img/bus.png"
              alt="One of our DAF busses"
              class="absolute md:block"
            />
          </div>
        </div>
        <!-- intro text -->
        <div
          class="px-4 sm:absolute sm:top-0 sm:z-10 md:px-0 md:mt-24 lg:mt-40 lg:ml-20 xl:ml-32 transition-all duration-300 ease-linear"
        >
          <h1
            class="mt-6 text-4xl md:text-5xl xl:text-6xl text-womy-darkBlue font-bold text-left max-w-lg lg:max-w-none"
          >
            Transport
            <br />
            and lifting
            <br />
            solutions
          </h1>
          <div class="mt-6 md:mt-10">
            <a
              href="/comming-soon/stock"
              class="py-3 px-6 md:py-4 lg:py-6 xl:px-10 text-sm rounded-kush shadow-md hover:shadow-xl bg-womy-darkBlue hover:bg-womy-orange text-gray-200 hover:text-womy-darkBlue transition-all duration-100 ease-linear cursor-pointer"
            >
              See our Stock
            </a>
          </div>
        </div>

        <!-- figures -->
        <div class="mt-4 w-full relative h-44 md:h-64 xl:h-84">
          <!-- silo -->
          <div
            class="w-40 h-40 lg:h-64 lg:w-64 xl:h-84 xl:w-84 absolute bottom-12 right-16 sm:bottom-28 sm:right-56 lg:bottom-10 lg:right-84 transition-all duration-300 ease-linear"
          >
            <SpotSilo class="absolute bottom-0" />
            <img
              loading="lazy"
              v-if="!mdReached"
              src="~assets/img/silo-sm.png"
              alt="One of our heavy cranes"
              class="absolute md:hidden"
            />
            <img
              loading="lazy"
              v-if="mdReached"
              src="~assets/img/silo.png"
              alt="One of our heavy cranes"
              class="absolute md:block"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- buy stuff -->
    <section class="w-full mt-16 px-4 md:px-12 max-w-screen-2xl lg:mx-auto">
      <h1 class="font-bold text-3xl">Buy equipment</h1>
      <AppFeaturedList :featuredCars="featuredCars">
        <li
          class="rounded-kush overflow-hidden flex justify-center items-center relative bg-gray-300 hover:bg-gray-400 hover:shadow-xl transition-all duration-150 ease-linear"
        >
          <a
            href="/comming-soon/sell-to-us"
            class="font-medium text-xl absolute inset-0 h-full w-full flex items-center justify-center"
            >Sell to us →</a
          >
        </li>
      </AppFeaturedList>
    </section>

    <!-- newly arrives -->
    <section
      class="rounded-kush mt-16 px-4 md:px-12 max-w-screen-2xl lg:mx-auto"
    >
      <div class="py-10">
        <div>
          <h2 class="font-bold text-2xl">Newly Arrived</h2>
          <AppNewlyList :items="newlyArrives" />
        </div>
        <div class="mt-16">
          <h2 class="font-bold text-2xl">Expected Stock</h2>
          <AppNewlyList :items="expectedArrives" />
        </div>
      </div>
    </section>

    <!-- moving n rolling 😆️ -->
    <section class="w-full mt-16 px-4 md:px-12 max-w-screen-2xl lg:mx-auto">
      <div
        class="flex justify-center py-10 md:py-14 px-4 rounded-kush bg-gradient-to-tr text-gray-100 from-amber-500 to-fuchsia-600"
      >
        <div>
          <h1 class="font-bold text-4xl leading-none max-w-lg">
            Moving, rolling, lifting your expectations.
          </h1>
          <p class="mt-6 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            exercitationem illum, illo ullam vitae excepturi soluta asperiores
            reiciendis laboriosam debitis pariatur rem atque voluptas hic
            deserunt, velit nulla amet ex.
          </p>
        </div>
      </div>
    </section>
    <!-- brands carrousel -->
    <section></section>
  </div>
</template>

<script>
import AppFeaturedList from "@/components/home/AppFeaturedList.vue";
import AppNewlyList from "@/components/home/AppNewlyList.vue";
import { mapGetters } from "vuex";
import { onMounted, reactive, watchEffect, ref } from "@vue/composition-api";
import { useEventListener } from "@vueuse/core";

export default {
  components: {
    AppFeaturedList,
    AppNewlyList,
    SpotBus: () => import("~/components/home/svg/SpotBus.vue"),
    SpotCrane: () => import("~/components/home/svg/SpotCrane.vue"),
    SpotSilo: () => import("~/components/home/svg/SpotSilo.vue"),
  },
  computed: {
    ...mapGetters("data/", ["featuredCars", "newlyArrives", "expectedArrives"]),
  },
  setup() {
    const mdReached = ref(false);
    onMounted(() => {
      if (process.client) {
        mdReached.value = window.innerWidth >= 768;
      }
      useEventListener("resize", (evt) => {
        mdReached.value = window.innerWidth >= 768;
      });
    });

    return {
      mdReached,
    };
  },
};
</script>

<style>
.grid-cols-270 {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  /* grid-gap: 36px; */
}

.min-h-vh-80 {
  min-height: 80vh;
}
</style>