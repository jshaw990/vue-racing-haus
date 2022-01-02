<template>
	<div
		class="header flex py-4 px-8 justify-between bg-red-800 font-bold text-white mb-4"
	>
		<div class="text-xl">
			<router-link to="/"> Racing.Haus </router-link>
		</div>
		<div class="flex">
			<div class="px-4">
                <router-link to="/car-reviews">Car Reviews</router-link>
            </div>
			<div class="px-4">Musings</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
	};
</script>
