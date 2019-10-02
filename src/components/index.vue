<template>
	<div>	
		<signIn v-if="needSignIn" v-on:sign="loadTodos()"></signIn>
		<todo v-else v-on:logOut="needSignIn = true"></todo>
	</div>
</template>

<script>
	import signIn from '@/components/signIn.vue';
	import todo from '@/components/todo.vue';

	export default {
		data(){
			return{
				needSignIn: false
			}
		},methods: {  
			loadTodos(){
    			this.$store.dispatch('loadTodosArr', localStorage.email);
				this.needSignIn	= false;
			}
		},
		
		components: {
			signIn,
			todo
		},
		mounted(){
			if (localStorage.email) {
    			this.loadTodos();
			} else {
				// this.needSignIn	= true;
    			this.$router.push( {path: 'login'} );

			}
		}
	};
</script>