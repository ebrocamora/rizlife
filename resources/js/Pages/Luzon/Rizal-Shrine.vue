<template>
  <div class="relative">
  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
			<img :src="`/images/luzon/background/Rizal%20Shrine.jpg`" class="w-full h-full object-cover"/>
  	</div>
  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
  		<div class="flex-1">
  			<img :src="`/images/luzon/Rizal%20Shrine.jpg`" class="w-full h-auto shadow-xl mx-auto"/>
  		</div>
  		<div class="flex-1 px-4">
  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
  				Rizal Shrine
  			</h1>
  			<p class="text-white">
  				Rizal Shrine is a museum dedicated to the lifework of José Rizal. It is located on Santa Clara Street, Fort Santiago, Intramuros, Manila, Philippines. The museum is in the building where Rizal spent his final night and hid his famous poem Mi último adiós (My Last Farewell) in an oil lamp later given to his sister, Trinidad. The shrine is home to various memorabilia such as the shells he collected in Dapitan, books, manuscripts, and artwork.
  			</p>
  		</div>
  	</div>
  </div>
</template>

<script>
	export default {

	}
</script>