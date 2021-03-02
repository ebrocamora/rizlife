<template>
  <div class="relative">
    <!-- header nav -->
    <div class="fixed top-0 w-full h-16 z-30 py-2 transition duration-200 ease-in-out" :class="isRouteAbout ? 'bg-green-900 h-20' : 'bg-transparent'">
      <div class="flex items-center px-8 gap-4">
        <router-link to="/" class="relative w-32 text-white" :class="isRouteHome ? 'py-6' : 'py-4'">
          <img :src="`/sprites/logo.svg`" class="h-8 w-auto"/>
        </router-link>
        <div class="flex-1 justify-right text-right">
          <button type="button" class="h-12 w-12 rounded-full focus:outline-none transition duration-200 ease-in-out" :class="menuActive && isRouteHome ? 'text-white' : menuActive ? 'bg-black bg-opacity-50 text-white' : isRouteHome ? 'text-gray-800' : 'text-white'" @click="menuActive = !menuActive">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-8 w-8 mx-auto" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- menu -->
    <div class="fixed right-0 top-0 bg-green-800 w-full md:w-1/2 md:h-full pt-20 z-20 transition duration-200 ease-in-out transform" :class="menuActive ? 'translate-y-0 translate-x-0' : '-translate-y-full md:translate-y-0 md:translate-x-full'">
      <div class="relative container mx-auto">
        <nav>
          <li v-for="(item, index) in menu" :key="index" class="block">
            <router-link :to="item.path" class="block py-4 px-8 group">
              <span class="font-bold text-white group-hover:text-green-300 md:text-2xl">
                {{ item.name }}
              </span>
            </router-link>
          </li>
        </nav>
      </div>
    </div>
    <!-- content -->
    <div class="relative z-10">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  overflow: auto;
}
</style>

<script>
    export default {
      data() {
        return {
          menuActive: false,
          menu: [
            {
              path: '/',
              name: 'Home'
            },
            {
              path: '/luzon',
              name: 'Luzon'
            },
            {
              path: '/visayas',
              name: 'Visayas'
            },
            {
              path: '/mindanao',
              name: 'Mindanao'
            },
            {
              path: '/about-us',
              name: 'About Us'
            },
          ]
        }
      },
      watch: {
        $route (to, from) {
          this.menuActive = false;
        }
      },
      computed: {
        isRouteHome() {
          return this.$route.name === 'home'
        },
        isRouteAbout() {
          return this.$route.name === 'about-us'
        }
      }
    }
</script>
