<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20Province.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20Province.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				Rizal Province
  			</h1>
  			<p class="text-white">
  				Rizal is a province in the Philippines located in the CALABARZON region in Luzon. Its capital is the city of Antipolo. It is about 16 kilometers east of Manila. The province is named after José Rizal, one of the main national heroes of the Philippines.
  			</p>
  		</div>
  	</div>
  </div>
</template>