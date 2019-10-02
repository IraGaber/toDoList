<template>
	<div>	
<<<<<<< HEAD
		<signIn v-if="needSignIn" v-on:sign="loadTodos()"></signIn>
		<todo v-else v-on:logOut="needSignIn = true"></todo>
=======
		<todo v-if="this.$store.state.email"></todo>

		<signIn v-else></signIn>
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
	</div>
</template>

<script>
	import signIn from '@/components/signIn.vue';
	import todo from '@/components/todo.vue';

	export default {
		data(){
			return{
<<<<<<< HEAD
				needSignIn: false
			}
		},methods: {  
			loadTodos(){
    			this.$store.dispatch('loadTodosArr', localStorage.email);
				this.needSignIn	= false;
			}
=======
			}
		},methods: {  
		
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
		},
		
		components: {
			signIn,
			todo
<<<<<<< HEAD
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
=======
		}
	};



</script>

<style csoped lang="sass">
	.ololo
		transform: rotate(30deg)
		color: #a9c74f

	
</style>
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
