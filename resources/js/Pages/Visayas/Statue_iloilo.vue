<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/visayas/background/Historic_Plaza_IloIlo.jpg`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/visayas/Historic_Plaza_IloIlo.jpg`" class="w-full h-auto shadow-xl mx-auto" style = "height:500px;width:600px"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Rizal Statue, Iloilo City
	  			</h1>
	  			<p class="text-white">
	  				This 102-year-old life-size statue of Dr. Jose Rizal at Iloilo City’s historic Plaza Libertad honors his patriotism. 
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