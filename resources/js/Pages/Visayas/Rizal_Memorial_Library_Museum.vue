<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/visayas/background/Rizal_Memorial_Library_Museum.jpg`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/visayas/Rizal_Memorial_Library_Museum.jpg`" class="w-full h-auto shadow-xl mx-auto" style = "height:500px;width:600px"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Rizal Memorial Library and Museum, Cebu City
	  			</h1>
	  			<p class="text-white">
	  				Rizal Memorial Library and Museum is a three-story, pre-war, neoclassical legacy site and landmark in Cebu City, Philippines. Dedicated to the national legend, Jose P. Rizal, it was planned by Filipino modeler Juan Marcos Arellano, who moreover planned the Cebu Common Capitol building. Introduced in 1939, the building survived World War II. It is found along Osmeña Boulevard and houses the workplaces of Cebu City Tourism, the Cultural and Historical Affairs Commission, the Sinulog Hall on the third floor, the Cebu City Museum of Visual Arts on the second floor, and the Cebu City Open Library on the ground floor. 
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