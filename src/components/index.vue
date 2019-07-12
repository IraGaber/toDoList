<template>
	<div>	
		<todo v-bind:email="email"></todo>

		<signIn v-on:signup="saveEmail"></signIn>
	</div>
</template>

<script>
	import signIn from '@/components/signIn.vue';
	import todo from '@/components/todo.vue';

	export default {
		data(){
			return{
				email: 'U dont write email'
			}
		},methods: {
			saveEmail: function (email) {
				if (email) {
					this.email = email;
				}
			}
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