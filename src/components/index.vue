<template>
	<div>	
		<todo v-if="email" v-bind:email="email" v-bind:todoArr="dataArr" v-on:clearEmail="email =''"></todo>

		<signIn v-else v-on:signup="signup"></signIn>
	</div>
</template>

<script>
	import signIn from '@/components/signIn.vue';
	import todo from '@/components/todo.vue';

	export default {
		data(){
			return{
				email: '',
				dataArr: []

			}
		},methods: {  
			signup: function (email, data) {
				this.email = email;
				this.dataArr = data;
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