<template>
  <header class="w-full bg-white fixed z-50 top-0 right-0">
    <!-- mobile -->
    <div class="xl:hidden">
      <!-- top menu -->
      <div class="bg-white h-16 md:h-20 w-full flex relative z-30">
        <div
          class="w-full px-3 md:px-12 my-auto h-12 md:h-16 flex items-center justify-between"
        >
          <!-- Home Link -->
          <a
            href="/"
            role="banner"
            class="h-10 sm:h-12 flex items-center justify-center"
          >
            <img src="~assets/img/lomy-0.png" alt="" class="h-full" />
          </a>

          <div class="w-40 sm:w-64 md:h-12 md:hidden">
            <AppSearchBar />
          </div>

          

          <!-- MD actions -->
          <div class="hidden md:flex">
            <div class="w-40 md:h-12">
              <AppSearchBar />
            </div>

            <!-- Call Us -->
            <a
              href="tel:+31168331733"
              class="ml-8 w-12 h-12 flex items-center justify-center rounded-og hover:bg-womy-darkBlue hover:text-gray-100 text-gray-400 transition-colors duration-150 ease-linear"
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current  "
                >
                  <path
                    d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Links -->
      <transition name="fade">
        <div
          v-if="navOpen"
          @click="closeNav"
          class="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full"
        >
          <transition name="fade-from-left">
            <div
              v-if="navOpen"
              class="h-full overflow-y-auto max-w-xs scrolling-touch overflow-hidden bg-white mr-24 pb-12"
            >
              <!-- Top Menu -->
              <div class="pt-3 bg-white w-full relative z-30">
                <div class="w-full px-3 my-auto flex flex-col">
                  <!-- Home Link -->
                  <a href="/" role="banner" class="h-10 md:h-12">
                    <img src="~assets/img/lomy-0.png" alt="" class="h-full" />
                  </a>

                  <div class="mt-5 w-full sm:w-64 md:h-12" @click.stop="">
                    <AppSearchBar />
                  </div>
                </div>
              </div>

              <ul class="mt-4 px-3 text-ligth-dimmed text-lg" @click.stop="">
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/" class="block">Home</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/stock" class="block">Stock</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/parts" class="block">Parts</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/rental" class="block">Rental</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/brands" class="block">Brands</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/sell-to-us" class="block">Sell to us</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/about-us" class="block">About us</a>
                </li>
                <li
                  class="mt-2 py-2 pl-2 rounded-og hover:bg-surface-lightGray"
                >
                  <a href="/comming-soon/contact" class="block">Contact</a>
                </li>
                <!-- languages -->
                <li class="mt-8 border-t border-gray-300 opacity-60">
                  <ul class="mt-4 grid grid-cols-2 px-3 text-sm">
                    <li>
                      <ul>
                        <li class="py-2 mt-2">
                          <a href="/" class="block">English</a>
                        </li>
                        <li class="py-2 mt-2">
                          <a href="/" class="block">Destuch</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <ul>
                        <li class="py-2 mt-2">
                          <a href="/" class="block">Francais</a>
                        </li>
                        <li class="py-2 mt-2">
                          <a href="/" class="block">Español</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </transition>
    </div>

    <!-- desktop -->
    <div
      class="hidden bg-white h-24 w-full xl:flex relative z-30 max-w-screen-2xl mx-auto"
    >
      <div class="w-full px-12 my-auto h-12 flex items-center justify-between">
        <!-- Home Link -->
        <a
          href="/"
          role="banner"
          class="h-10 sm:h-12 flex items-center justify-center"
        >
          <img src="~assets/img/lomy-0.png" alt="" class="h-full" />
        </a>

        <!-- links -->
        <div>
          <ul
            class="px-3 text-ligth-dimmed text-base flex items-center justify-center space-x-3"
          >
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/" class="block opacity-100 font-bold">Home</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/stock" class="block opacity-60">Stock</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/parts" class="block opacity-60">Parts</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/rental" class="block opacity-60">Rental</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/brands" class="block opacity-60">Brands</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/sell-to-us" class="block opacity-60">Sell to us</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/about-us" class="block opacity-60">About us</a>
            </li>
            <li class="py-2 px-2 rounded-og hover:bg-surface-lightGray">
              <a href="/comming-soon/contact" class="block opacity-60">Contact</a>
            </li>
            <!-- languages -->
            <li class="mt-8 border-t border-gray-300 opacity-60">
              
            </li>
          </ul>
        </div>

        <div class="flex items-center h-full">
          <div class="w-40 h-full">
            <AppSearchBar />
          </div>

          <!-- Call Us -->
          <a
            href="tel:+31168331733"
            class="ml-8 w-12 md:h-12 flex items-center justify-center rounded-og hover:bg-womy-darkBlue hover:text-gray-100 text-gray-400 transition-colors duration-150 ease-linear"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current "
              >
                <path
                  d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="w-full flex justify-center  fixed bottom-0 left-0 h-0">
      <div class="absolute bottom-0 w-full flex justify-center">
        <pre class="p-4 rounded-og shadow-lg bg-surface-lightGray">
          navOpen: {{ navOpen }}
        </pre>
      </div>
    </div> -->
  </header>
</template>

<script>
import { reactive, toRef } from "@vue/composition-api";
import { mapGetters, mapMutations } from "vuex";
import AppSearchBar from "@/components/global/AppSearchBar.vue";

export default {
  components: { AppSearchBar },
  computed: {
    ...mapGetters("ui/", ["navOpen"]),
  },
  setup() {
    return {};
  },
  methods: {
    ...mapMutations("ui/", [
      "closeNav", //also supports payload `this.nameOfAction(amount)`
    ]),
  },
};
</script>

<style scoped>
.white-droped {
  background: rgba(255, 255, 255, 0.883);
  backdrop-filter: blur(5px);
}
</style>