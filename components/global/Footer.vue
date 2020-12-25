<template>
  <div class="w-full mt-32">
    <div class="px-4 md:px-12 max-w-screen-2xl lg:mx-auto">
      <!-- newsletter -->
      <section class="w-full">
        <div class="flex justify-center w-full">
          <div>
            <h1 class="font-bold text-3xl">Get our new deals in your inbox</h1>
            <form class="mt-6">
              <fieldset class="">
                <label for="name" class="block ml-3 font-bold opacity-80 w-full"
                  >Name*</label
                >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="name"
                  class="block mt-2 w-full rounded-og py-3 pl-3 bg-light-elevatedSurface focus:outline-none focus:ring-2 ring-amber-500"
                />
              </fieldset>
              <fieldset class="mt-4">
                <label
                  for="email"
                  class="block ml-3 font-bold opacity-80 w-full"
                  >Email*</label
                >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  class="block mt-2 w-full rounded-og py-3 pl-3 bg-light-elevatedSurface focus:outline-none focus:ring-2 ring-amber-500"
                />
              </fieldset>
              <button
                class="text-gray-100 bg-womy-darkBlue w-full mt-3 py-3 rounded-og focus:outline-none focus:ring-2 ring-amber-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
    <!-- footer -->
    <div class="bg-vercel-lightGray border-t border-vercel-borderGray mt-32">
      <!-- links -->
      <footer class="pb-16 pt-16 px-4 md:px-12 max-w-screen-2xl lg:mx-auto">
        <div
          class="text-xl space-y-8 md:space-y-0 max-w-2xl mx-auto md:gap-9 md:grid md:grid-cols-2 lg:grid-cols-4"
        >
          <!-- call us -->
          <div class="text-sm">
            <h2 class="font-medium text-base">Call us</h2>
            <a href="tel:+random-number-555" class="hover:text-amber-500 mt-4 block"
              >+31 (5) 555 555 555</a
            >
          </div>
          <!-- email us -->
          <div class="mt-6 md:mt-0 text-sm">
            <h2 class="font-medium text-base">Email us</h2>
            <ul class="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  class="hover:text-amber-500 block"
                >
                  sales@lomy.nl
                </a>
              </li>
              <li>
                <a
                  href="mailto:parts@lomy.nl"
                  class="hover:text-amber-500 block"
                >
                  parts@lomy.nl
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@lomy.nl"
                  class="hover:text-amber-500 block"
                >
                  info@lomy.nl
                </a>
              </li>
            </ul>
          </div>
          <!-- stock -->
          <div class="mt-6 md:mt-0">
            <h3 class="font-medium text-base">Stock</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <a href="/comming-soon/stock" class="hover:text-amber-500 text-sm block"
                  >Used buses</a
                >
              </li>
              <li>
                <a href="/comming-soon/stock" class="hover:text-amber-500 text-sm block"
                  >Used trucks</a
                >
              </li>
              <li>
                <a href="/comming-soon/stock" class="hover:text-amber-500 text-sm block"
                  >Used cranes</a
                >
              </li>
              <li>
                <a href="/comming-soon/stock" class="hover:text-amber-500 text-sm block"
                  >Used cars</a
                >
              </li>
              <li>
                <a href="/comming-soon/stock" class="hover:text-amber-500 text-sm block"
                  >Used equipment</a
                >
              </li>
              <li>
                <a href="/comming-soon/stock" class="hover:text-amber-500 text-sm block"
                  >Used parts</a
                >
              </li>
            </ul>
          </div>
          <!-- address -->
          <div class="mt-6 md:mt-0">
            <h3 class="font-medium text-base">Address</h3>
            <address class="mt-4 text-sm">
              Benjumina Street No 500
            </address>
          </div>
        </div>
        <div class="mt-20 text-center">
          <!-- <img src="/img/lomy-park.jpg" alt="our stock" class="h-44 rounded-kush" /> -->
          <p class="mt-2 text-sm">Lomy is a fictitious brand <br> Any coincidence it wasn't intentional </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>