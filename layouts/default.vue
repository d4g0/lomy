<template>
  <div class="antialiased text-light-onSurface w-full ">
    <AppMenu />
    <AppPhoneBtn/>
    <AppMenuBurger />
    <Nuxt />
    <Footer/>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AppMenuBurger from "@/components/global/AppMenuBurger.vue";
import AppMenu from "~/components/global/AppMenu.vue";
import AppPhoneBtn from '~/components/global/AppPhoneBtn.vue';
import Footer from '~/components/global/Footer.vue';

export default {
  components: {
    AppMenuBurger,
    AppMenu,
    AppPhoneBtn,
    Footer,
  },
  computed: {
    ...mapGetters("ui/", ["navOpen"]),
  },
  head() {
    //
    return {
      bodyAttrs: {
        class: [
          "font-sans flex antialiased flex-col  bg-white transition-colors duration-300 ease-linear text-ligth-onSurface pt-16 sm:pt-24 ".concat(
            this.navOpen ? 'overflow-hidden absolute inset-0' : '' )
          ,
        ],
      },
    };
  },
};
</script>

<style>
</style>
