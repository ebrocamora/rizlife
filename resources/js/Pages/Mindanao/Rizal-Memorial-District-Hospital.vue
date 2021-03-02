<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/Mindanao/background/RizalMemorialProvincialDistrictHospital.JPG`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/Mindanao/RizalMemorialProvincialDistrictHospital.png`" class="w-full h-auto shadow-xl mx-auto"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Dr. Jose P. Rizal Memorial Provincial District Hospital, Zamboanga Del Norte
	  			</h1>
	  			<p class="text-white">
	  			Rizal Memorial Hospital was established in Casa Comandancia, Zamboanga Del Norte. Jose Rizal lived here when he was exiled to Dapitan in 1892. Organized, 1927–1931. It became a hospital for soldiers during World War II. Became Rizal Memorial District Hospital, 1982. Moved to its current location, 1991. Became Dr. Jose Rizal Memorial Hospital, 30 July 1996.
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
