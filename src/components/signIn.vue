<template >
	<div class="sign-in">
		<h1>Welcome to ToDoList</h1>
		<form action=""  v-on:submit.prevent="signIn" >
			<label for="">
				Enter your email
				<br>
				<input class="sign-in__email" type="email" placeholder="example@email.com" v-model="email">
				<br>
				<span v-if="error" class="sign-in__erorr">Write correct email</span>
				<br>
				<input type="submit" class="sign-in__submit" value="Enter">
			</label>
		</form>
		<div v-if="this.$store.state.needDrawer" class="loader-wrapper"><i class="loader fab fa-earlybirds"></i></div>

	</div>
</template>
<script>
  		export default {
  			data(){
  				return{
					email: '',
					error: false,
					
				}
  			},
			 methods: {
    			signIn(event){
    				if (this.email) {
    					this.$store.commit('addLoader');
    					this.$store.dispatch('loadTodosArr', this.email);
					}else{
						this.error = true;
					}
				}
    		},
    		mounted(){
    			
    		}
		}
</script>
<style csoped lang="scss">
	.sign-in{
		position: fixed;	
		left: 0;
		top: 0;
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
 		justify-content: center;

		background-color: lightgrey;

		h1{
			font-size: 60px;
		}
		form{
			margin-top: 50px;
		}
	}
	.sign-in__email{
		margin-top: 10px;
	}
	.sign-in__submit{
		height: 40px;
		width: 100px;
		background: #fff;
	}
	.sign-in__erorr{
		color: red;
		font-size: 10px;
	}
	.loader-wrapper{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #aaaaaa80;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loader{
		font-size: 100px; 
		animation: 1s linear 0s normal none infinite running rot;
		color:#b70c6c;
	}
	@keyframes rot {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	}
}

</style>