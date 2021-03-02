<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/visayas/background/Rizal_Monument_Catbaloganjpg.jpg`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/visayas/Rizal_Monument_Catbaloganjpg.jpg`" class="w-full h-auto shadow-xl mx-auto" style = "height:500px;width:600px"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Rizal Monument, Catbalogan City
	  			</h1>
	  			<p class="text-white">
	  				This unique monument of Rizal is located in Catbalogan City, Samar. The monument is a bust of Rizal, on the top of his two novels Noli Me Tangere and El filibusterismo which are cattied by three mascular men who are all naked except for a leaf that covers their private parts. The monument was sculptured by Miguel Alcazar, a native of Catbolagan. 
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