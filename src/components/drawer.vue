<template>
	<div>
		<div class="drawer-bg" v-on:click = "close">
			<i v-if="this.$store.state.needLoader" class="loader fab fa-earlybirds"></i>
		</div>
		<div v-if="!this.$store.state.needLoader" class="drawer">
			<form action="" v-on:submit.prevent="changeTodoList">
				<label class="drawer__input-label">
					<h2>Template</h2>
					<input class="drawer__input drawer__input_title" type="text" v-model="titleLocal">
				</label>
				<label class="drawer__input-label">
					<h2>Description</h2>
					<textarea class="drawer__input drawer__input_description" v-model="descriptionLocal"></textarea>
				</label>

				<br>
				<input class="drawer__input drawer__input_submit" type="submit" value="submit">

			</form>
			<button v-on:click = "close" class="drawer__close"><i class="fas fa-times"></i></button>
		</div>
		
	</div>
</template>
<script>
	export default {
		
		data () {
		  return {
		    titleLocal: (this.$store.state.curentToDoIndex !== null) ?  this.$store.state.todosArr[this.$store.state.curentToDoIndex].title : 'write something' ,

		    descriptionLocal: (this.$store.state.curentToDoIndex !== null) ?  this.$store.state.todosArr[this.$store.state.curentToDoIndex].description : 'write something too' ,
		  }
		},			
		methods: {
			changeTodoList: function() {
				if (this.$store.state.curentToDoIndex === null) { //adding
    				this.$store.commit('addLoader');
					this.$axios.post('https://raysael.herokuapp.com/todo', {

					    author: this.$store.state.email,
					    title: this.titleLocal.substr(0,25),
					    description: this.descriptionLocal

					 })  
					.then(function	(response){

    					this.$store.commit('pushNewToDo', response.data);
						this.$store.commit('removeDrawer');
						this.$store.commit('removeLoader');

						
					}.bind(this))
					.catch(function (error) {
							console.log(error);
					});
				}
				else { //editing

					this.$store.commit('addLoader');
					this.$axios.patch(`
						https://raysael.herokuapp.com/todo/
										${this.$store.state.todosArr[this.$store.state.curentToDoIndex]._id}`, {
						title: this.titleLocal.substr(0,25), //max title length = 25
						description: this.descriptionLocal
					})
					.then(function (response){
						this.$store.commit('editToDo', {
							title: this.titleLocal,
							description: this.descriptionLocal,
						});
						this.$store.commit('changeCurentToDoIndex');
						this.$store.commit('removeLoader');
						this.$store.commit('removeDrawer');
					}.bind(this))
					.catch(function (error) {
							console.log(error);
					});
				}
			},
			close: function () {
				this.$store.commit('removeDrawer');
				this.$store.commit('changeCurentToDoIndex');
			}
		}
	}	
</script>
<style csoped lang="scss">
	.drawer-bg{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #aaaaaa80;
	}
	.drawer{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 3;

		padding: 50px 30px;
		height: 100vh;
		width: 280px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background: white;
	}
		.drawer__input{
			width: 100%;
			margin-top: 10px;
			margin-bottom: 20px;
		}
			.drawer__input_description{
				height: 200px;
			}
			.drawer__input_submit{
				font-size: 24px;
			}
		.drawer__close{
			background: transparent;
		    border: none;
		    width: 40px;
		    font-size: 24px;
		}
	.loader{
		font-size: 100px; 
		animation: 1s linear 0s normal none infinite running rot;
		color:#b70c6c;
	}
</style>
