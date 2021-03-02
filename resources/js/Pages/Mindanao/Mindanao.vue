<template>
  <div class="relative h-screen pt-20 bg-yellow-900 bg-opacity-60">
    <div class="relative h-full container mx-auto">
    	<div class="relative md:pl-20 pb-20">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <div class="fixed bottom-0 left-0 w-full h-20 z-30">
        <div class="relative w-full h-12 whitespace-nowrap overflow-x-auto overflow-y-hidden text-center">
          <router-link v-for="(link, index) in routeLinks" :key="index"
            :to="link.routePath" class="inline-block px-2 -mr-1 filter-grayscale hover:filter-none">
            <div class="image-link">
              <img :src="link.image" class="w-12 h-12 rounded-md object-cover relative z-20"/>
              <div class="image-caption fixed bottom-4 left-0 w-full z-10">
                <span class="bg-black bg-opacity-75 px-3 py-2 rounded-md text-white font-bold" v-text="link.name"></span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image-link .image-caption {
  opacity: 0;
  visibility: hidden;
  transition: all .2s ease-in-out;
}
.image-link:hover .image-caption {
  opacity: 1;
  visibility: visible;
}

</style>

<script>
  export default {
    data() {
      return {
        routeLinks: [
          {
            routePath: 'rizal-memorial-district-hospital',
            image: '/images/Mindanao/thumbnail/RizProvincialDistrictHospital.png',
            name: 'Dr. Jose P. Rizal Memorial Provincial District Hospital'
          },
          {
            routePath: 'rizal-memorial-landscape',
            image: '/images/Mindanao/thumbnail/RizMemorialLandscape.jpg',
            name: 'José Rizal Memorial Protected Landscape'
          },
          {
            routePath: 'rizal-memorial-park',
            image: '/images/Mindanao/thumbnail/RizMemorial.jpg',
            name: 'Rizal Memorial Park'
          },
          {
            routePath: 'rizal-monument-sindangan',
            image: '/images/Mindanao/thumbnail/RizalMonumentSindangan.jpg',
            name: 'Rizal Monument Sindangan'
          },
                  {
            routePath: 'rizal-rmc',
            image: '/images/Mindanao/thumbnail/RMC.png',
            name: 'Rizal Memorial Colleges'
          },
          {
            routePath: 'rizal-rmidi',
            image: '/images/Mindanao/thumbnail/RMIDCI.png',
            name: 'Rizal Memorial Institute of Dapitan City, Inc.'
          },
          {
            routePath: 'rizal-sakahan',
            image: '/images/Mindanao/thumbnail/SakahanRizal.jpg',
            name: 'Sakahan ni Rizal'
          },
          {
            routePath: 'rizal-sped-education',
            image: '/images/Mindanao/thumbnail/RizalSpedEdu.png',
            name: 'Rizal Special Education Learning Center'
          },
        ]
      }
    }
  }
</script>
