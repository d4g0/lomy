<template>
  <div class="pb-8 min-h-screen-80 relative">
    <main>
      <div class=" px-12 max-w-xl lg:max-w-2xl mx-auto ">
        <div class="mt-20 md:mt-40">
          <h1 class="text-3xl lg:text-6xl font-bold">
            <span class="opacity-75"> Hey there, the </span>

            <span class="font-black">
              {{ resource }}
            </span>
            <span class="opacity-75">
              page it's not ready yet, if you like to see it alive drop me a
            </span>
            <a href="mailto:tocarralero@gmail.com" class="text-womy-orange"
              >line</a
            >
          </h1>
        </div>
        <div class="mt-16 w-full flex justify-center">
          <a href="/"> ← Go back home</a>
        </div>
      </div>
    </main>
    <footer class="w-full  mt-20 lg:mt-40 flex items-center justify-center">
        <h3 class="py-4 text-sm opacity-75">hand-crafted with 💚️ in Havana</h3>
    </footer>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  layout: "mesh",
  data() {
    return {
      resource: "",
    };
  },
  asyncData({ params }) {
    let slug = params.slug;
    let cleanSlug = "";
    slug.split("-").forEach((s) => {
      cleanSlug += s + " ";
    });
    return {
      resource: cleanSlug,
    };
  },

  setup() {
    const resource = ref("");

    // return resource;
  },
};
</script>

<style>
.min-h-screen-80{
    min-height: 80vh;
}
</style>