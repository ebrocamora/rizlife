<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/Mindanao/background/RizalMonumentSindangan.JPG`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/Mindanao/RizalMonumentSindangan.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
                    Rizal Monument Sindangan, Dapitan City
	  			</h1>
	  			<p class="text-white">
	  				In front of the Church of St. James the Greater is the Dapitan City Plaza (“Liwasan ng Dapitan”), also known as the City Square.  During his exile, Dr. Jose Rizal beautified and developed this plaza.  With the assistance of Spanish Politico-Military Governor of Dapitan, Gov. Ricardo Carnicero, he made the plaza comparable to the ones he saw in Europe.
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
