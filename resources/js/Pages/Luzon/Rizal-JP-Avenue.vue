<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20JP%20Avenue.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20JP%20Avenue.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				J.P. Rizal Avenue
  			</h1>
  			<p class="text-white">
  				Jose P. Rizal Avenue, more commonly known as J. P. Rizal Avenue or J. P. Rizal Street, is a major local avenue in Makati, Metro Manila, Philippines. It is a contour collector road on the south bank of the Pasig River that runs east-west from Pateros Bridge in the Makati-Pateros border to its intersection with Zobel Roxas, Delpan, and Tejeron Streets in the Makati-Manila border. The avenue was named after the Philippines' national hero, Dr. José P. Rizal.
  			</p>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {

	}
</script>