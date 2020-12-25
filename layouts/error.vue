<template>
  <div class="w-full min-h-screen border flex flex-col items-center justify-center relative">
    <div class="w-full flex flex-col items-center">
        <span class="transform rotate-90 font-bold text-8xl">:(</span>
    </div>
    <div v-if="error.statusCode === 404">
      <h1 class="font-bold text-3xl md:text-5xl" >{{error.message}}</h1>
    </div>
    <div v-else class="">
      <h1 class="font-bold text-center mt-20 text-6xl"> {{error.statusCode}} </h1>
      <p class="font-bold text-3xl mt-2 ">{{error.message}}</p>
    </div>
    <nuxt-link to="/" class="mt-16 opacity-75 hover:opacity-100"> 
    <span>←</span> 
    <span class="ml-2">Back Home page</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout:'meshing',
  props: ["error"],
};
</script>