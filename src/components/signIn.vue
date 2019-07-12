<template >
	<div v-if="!signed" class="sign-in">
		<h1>Welcome to ToDoList</h1>
		<form action=""  v-on:submit.prevent="signIn" >
			<label for="">
				Enter your email
				<br>
				<input class="sign-in__email" type="email" placeholder="example@email.com" v-model="email">
				<br>
				<input type="submit" class="sign-in__submit" value="Enter">
			</label>
		</form>
	</div>

</template>
<script>
  		export default {
  			data(){
  				return{
					signed: false,
					email: ''
					
				}
  			},
			 methods: {
    			signIn(event){
    				this.signed=true;
    				console.log(this.email);
					this.$emit('signup', this.email);

    			}
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
		margin: 10px;
	}
	.sign-in__submit{
		height: 40px;
		width: 100px;
		background: #fff;
	}

</style>