<template>
	<transition name="fade">
	  <div class="relative">
	  	<div class="fixed h-full w-full top-0 left-0 select-none z-10">
  			<div class="absolute z-20 w-full h-full bg-black bg-opacity-50"></div>
  			<img :src="`/images/Mindanao/background/RizalSpedEdu.JPG`" class="w-full h-full object-cover"/>
	  	</div>
	  	<div class="relative md:absolute top-0 z-20 md:h-screen w-full md:-my-20 flex flex-col md:flex-row justify-center items-center gap-4">
	  		<div class="flex-1">
	  			<img :src="`/images/Mindanao/RizalSpedEdu.png`" class="w-full h-auto shadow-xl mx-auto"/>
	  		</div>
	  		<div class="flex-1 px-4">
	  			<h1 class="text-3xl font-bold text-yellow-500 mb-8">
	  				Rizal Special Education Learning Center, Davao City
	  			</h1>
	  			<p class="text-white">
	  				It is also known as Rizal Sped De La Salle, is a private and a De La Salle-supervised school in Davao City. The school was established by three teachers who specialize in preschool and special education. In 1986, it first opened for enrollment of students with special needs. Each year, regular elementary classes were offered to prepare the students for mainstream schooling. In 1995, RSELC started offering high school programs.
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
