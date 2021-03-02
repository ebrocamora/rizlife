<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20Avenue.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20Avenue.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				Rizal Avenue
  			</h1>
  			<p class="text-white">
  				Rizal Avenue, also known as Avenida or Avenida Rizal, is one of Manila's main thoroughfares. Named after the national hero José Rizal, it is a part of Radial Road 9 (R-9). The LRT Line 1 elevated railroad is built above the street in its entire length, and several jeepneys ply the area taking passengers from Caloocan, Quezon City, and Valenzuela. Most of the street is within Santa Cruz, Manila. By the 1960s, economic activities shifted from Binondo to Makati.
  			</p>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {

	}
</script>