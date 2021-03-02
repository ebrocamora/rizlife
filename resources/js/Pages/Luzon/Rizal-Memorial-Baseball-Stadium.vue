<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20Memorial%20Baseball%20Stadium.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20Memorial%20Baseball%20Stadium.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				Rizal Memorial Baseball Stadium
  			</h1>
  			<p class="text-white">
  				The Rizal Memorial Baseball Stadium is a baseball stadium located inside the Rizal Memorial Sports Complex in Manila, Philippines. It has a seating capacity of 10,000.
  			</p>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {

	}
</script>