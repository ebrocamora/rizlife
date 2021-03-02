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
            routePath: 'rizal-Monument-Tacloban',
            image: '/images/visayas/thumbnail/1.jpg',
            name: 'Rizal Monument in Tacloban'
          },
          {
            routePath: 'rizal-monument-catbalogan',
            image: '/images/visayas/thumbnail/2.jpg',
            name: 'Rizal Monument in Catbalogan'
          },
          {
            routePath: 'rizal-memorial-library-museum',
            image: '/images/visayas/thumbnail/3.jpg',
            name: 'Rizal Memorial Library & Museum'
          },
          {
            routePath: 'rizaliana-museum',
            image: '/images/visayas/thumbnail/4.jpg',
            name: 'Rizaliana Museum'
          },
          {
            routePath: 'rizal-monument-carcar',
            image: '/images/visayas/thumbnail/5.jpg',
            name: 'Jose Rizal Monument in Carcar City'
          },
          {
            routePath: 'rizal-institute-negros-occidental',
            image: '/images/visayas/thumbnail/6.jpg',
            name: 'Rizal Institute in Negros Occidental'
          },
           {
            routePath: 'small-plaza-guimaras',
            image: '/images/visayas/thumbnail/7.jpg',
            name: 'Jose Rizal Small Plaza in Guimaras Island'
          },
          {
            routePath: 'statue-iloilo',
            image: '/images/visayas/thumbnail/8.jpg',
            name: 'Jose Rizal Statue in Iloilo City'
          },
           {
            routePath: 'sitting-hero',
            image: '/images/visayas/thumbnail/9.jpg',
            name: 'Rizal Monument "The Sitting Hero" in Azarraga, Iloilo City'
          },
          {
            routePath: 'rizal-monument-capiz',
            image: '/images/visayas/thumbnail/10.jpg',
            name: 'Rizal Monument in Capiz'
          },
          {
            routePath: 'rizal-park-tagbilaran',
            image: '/images/visayas/thumbnail/11.jpg',
            name: 'Rizal Park in Tagbilaran City, Bohol'
          },
          {
            routePath: 'rizal-elementary-school',
            image: '/images/visayas/thumbnail/12.jpg',
            name: 'Rizal Elementary School'
          },
          {
            routePath: 'statue-ormoc',
            image: '/images/visayas/thumbnail/13.jpg',
            name: 'Jose Rizal Statue in Ormoc City, Leyte'
          },
           {
            routePath: 'rizal-&-propagandist-iloilo',
            image: '/images/visayas/thumbnail/14.jpg',
            name: 'Rizal and the Propagandist'
          },

        ]
      }
    }
  }
</script>