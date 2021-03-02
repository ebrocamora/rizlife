<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/visayas/background/Jose_Rizal_Plaza_Small_Plaza.jpg`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/visayas/Jose_Rizal_Plaza_Small_Plaza.jpg`" class="w-full h-auto shadow-xl mx-auto" style = "height:500px;width:600px"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Rizal Small Plaza, Guimaras Island
	  			</h1>
	  			<p class="text-white">
	  				This monument of Jose Rizal is a plaza also called Small Plaza located in Guimaras Island is defined as an open open-place. This plaza is no more than 300 square meters but features a statue of the national hero, Jose Rizal. They say it utilized to be the holder of the Guinness record for smallest plaza within the world but it remains to be the smallest in the country. Great for some picture-taking while enjoying the island of Guimaras. 
	  			</p>
	  		</div>
	  	</div>
	  </div>
	 </transition>
</template>

<script>
	export default {

	}
</script>