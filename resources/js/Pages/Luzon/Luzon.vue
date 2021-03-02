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
  bottom: 6rem;
}
.image-link:hover .image-caption {
  opacity: 1;
  visibility: visible;
  bottom: 7rem;
}
.image-link .image-caption span {
  display: none;
}
.image-link:hover .image-caption span {
  display: inline-block;
}
</style>
 
<script>
  export default {
  	data() {
      return {
        routeLinks: [
          {
            routePath: 'rizal',
            image: '/images/luzon/thumbnail/Rizal%20Province.jpg',
            name: 'Rizal Province'
          },
          {
            routePath: 'rizal-nueva-ecija',
            image: '/images/luzon/thumbnail/Rizal%20Nueva%20Ecija.jpg',
            name: 'Rizal, Nueva Ecija'
          },
          {
            routePath: 'rizal-kalinga',
            image: '/images/luzon/thumbnail/Rizal%20Kalinga.jpg',
            name: 'Rizal, Kalinga',
          },
          {
            routePath: 'rizal-cagayan',
            image: '/images/luzon/thumbnail/Rizal%20Cagayan.jpg',
            name: 'Rizal, Cagayan',
          },
          {
            routePath: 'rizal-laguna',
            image: '/images/luzon/thumbnail/Rizal%20Laguna.jpg',
            name: 'Rizal, Laguna',
          },
          {
            routePath: 'rizal-occidental-mindoro',
            image: '/images/luzon/thumbnail/Rizal%20Occidental%20Mindoro.jpg',
            name: 'Rizal, Occidental Mindoro',
          },
          {
            routePath: 'rizal-memorial-baseball-stadium',
            image: '/images/luzon/thumbnail/Rizal%20Memorial%20Baseball%20Stadium.jpg',
            name: 'Rizal Memorial Baseball Stadium',
          },
          {
            routePath: 'rizal-memorial-coliseum',
            image: '/images/luzon/thumbnail/Rizal%20Memorial%20Coliseum.jpg',
            name: 'Rizal Memorial Coliseum',
          },
          {
            routePath: 'rizal-memorial-sports-complex',
            image: '/images/luzon/thumbnail/Rizal%20Memorial%20Sports%20Complex.jpg',
            name: 'Rizal Memorial Sports Complex',
          },
          {
            routePath: 'rizal-park',
            image: '/images/luzon/thumbnail/Rizal%20Park.jpg',
            name: 'Rizal Park',
          },
          {
            routePath: 'rizal-shrine',
            image: '/images/luzon/thumbnail/Rizal%20Shrine.jpg',
            name: 'Rizal Shrine',
          },
          {
            routePath: 'rizal-j-p-avenue',
            image: '/images/luzon/thumbnail/Rizal%20JP%20Avenue.jpg',
            name: 'J.P. Rizal Avenue',
          },
          {
            routePath: 'rizal-avenue',
            image: '/images/luzon/thumbnail/Rizal%20Avenue.jpg',
            name: 'Rizal Avenue',
          },
          {
            routePath: 'rizal-boulevard',
            image: '/images/luzon/thumbnail/Rizal%20Boulevard.jpg',
            name: 'Rizal Boulevard',
          },
          {
            routePath: 'rizal-drive-bgc',
            image: '/images/luzon/thumbnail/Rizal%20Drive%20BGC.jpg',
            name: 'Rizal Drive, Bonifacio Global City',
          },
        ]
      }
    }
  }
</script>