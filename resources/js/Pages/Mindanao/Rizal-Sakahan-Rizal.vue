<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/Mindanao/background/SakahanRizal.JPG`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/Mindanao/SakahanRizal.jpg`" class="w-auto h-80 shadow-xl mx-auto"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Sakahan ni Rizal, Zamboanga Del Norte
	  			</h1>
	  			<p class="text-white">
	  			When Dr. Jose Rizal was deported to Dapitan in Mindanao from 1892-1896 by the Spanish government, aside from spending some time in teaching the town folks, he also engaged in medical practice through which he was able to cure the eye ailment of Calixto Carreon. The story said that Calixto offered Dr. Rizal the 40-hectare land as a way to repay him. Dr. Rizal accepted Calixto's offer, but insisted on a payment of ₱200, which he had won in a lottery organized by the Spanish. Rizal planted coconuts, hemp, sugar cane, and fruit trees on his farm.
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
