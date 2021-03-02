<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20Nueva%20Ecija.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20Nueva%20Ecija.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				Rizal, Nueva Ecija
  			</h1>
  			<p class="text-white">
  				Rizal is a 2nd class municipality in the province of Nueva Ecija, Philippines. On December 26, 1912, Vice-Governor Newton signed the act and simultaneously issued a proclamation creating the town of Rizal. <br/>The town was named after Doc. Jose Rizal. On January 01, 1913, Don Julian Paraiso took his oath as the first Alcalde of the Municipality.
  			</p>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {

	}
</script>