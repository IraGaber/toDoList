<template>
	<div>	
		<todo v-if="this.$store.state.email"></todo>

		<signIn v-else></signIn>
	</div>
</template>

<script>
	import signIn from '@/components/signIn.vue';
	import todo from '@/components/todo.vue';

	export default {
		data(){
			return{
			}
		},methods: {  
		
		},
		
		components: {
			signIn,
			todo
		}
	};



</script>

<style csoped lang="sass">
	.ololo
		transform: rotate(30deg)
		color: #a9c74f

	
</style>