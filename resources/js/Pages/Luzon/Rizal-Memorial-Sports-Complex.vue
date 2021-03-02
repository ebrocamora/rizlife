<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20Memorial%20Sports%20Complex.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20Memorial%20Sports%20Complex.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				Rizal Memorial Sports Complex
  			</h1>
  			<p class="text-white">
  				Rizal Memorial Sports Complex is a national sports complex of the Philippines, located on Pablo Ocampo St. (formerly Vito Cruz St.), Malate, Manila. It is named in honor of the country's national hero, José Rizal. The complex is currently managed by the Philippine Sports Commission, while the property is owned by the Manila City government.
  			</p>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {

	}
</script>