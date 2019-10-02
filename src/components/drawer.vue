<template>
	<div>
		<div class="drawer-bg" v-on:click = "close">
			<i v-if="this.$store.state.needLoader" class="loader fab fa-earlybirds"></i>
		</div>
		<div v-if="!this.$store.state.needLoader" class="drawer">
<<<<<<< HEAD
			<form  class="drawer__form" action="" v-on:submit.prevent="changeTodoList">
				<label class="drawer__input-label">
					<h2>Template</h2>
					<input class="drawer__input drawer__input_title" type="text" v-model="titleLocal" placeholder="Write something">
				</label>
				<p class="drawer_error" v-if="titleError">Title can not be empty</p>
				<label class="drawer__input-label">
					<h2>Description</h2>
					<textarea class="drawer__input drawer__input_description" v-model="descriptionLocal" placeholder="Write something too"></textarea>
				</label>
				<p class="drawer_error" v-if="descriptionError">Description can not be empty</p>
				<input class="drawer__input drawer__input_submit" type="submit" value="submit">
=======
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

>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
			</form>
			<button v-on:click = "close" class="drawer__close"><i class="fas fa-times"></i></button>
		</div>
		
	</div>
</template>
<script>
	export default {
		
		data () {
		  return {
<<<<<<< HEAD
		    titleLocal: '' ,

		    descriptionLocal: '' ,
		    titleError: false,
		    descriptionError: false
=======
		    titleLocal: (this.$store.state.curentToDoIndex !== null) ?  this.$store.state.todosArr[this.$store.state.curentToDoIndex].title : 'write something' ,

		    descriptionLocal: (this.$store.state.curentToDoIndex !== null) ?  this.$store.state.todosArr[this.$store.state.curentToDoIndex].description : 'write something too' ,
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
		  }
		},			
		methods: {
			changeTodoList: function() {
<<<<<<< HEAD
				if (!this.titleLocal.length) {this.titleError = true} else{this.titleError = false }
				if (!this.descriptionLocal.length) {this.descriptionError = true}else {this.descriptionError = false}
				if (this.titleError || this.descriptionError) {
					return;
				}
				if (this.$store.state.curentToDoIndex === null) { //adding
    				this.$store.commit('addLoader');
					this.$axios.post('https://raysael.herokuapp.com/todo', {
=======
				if (this.$store.state.curentToDoIndex === null) { //adding
    				this.$store.commit('addLoader');
					this.$axios.post('https://raysael.herokuapp.com/todo', {

>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
					    author: this.$store.state.email,
					    title: this.titleLocal.substr(0,25),
					    description: this.descriptionLocal

					 })  
					.then(function	(response){
<<<<<<< HEAD
    					this.$store.commit('pushNewToDo', response.data);
						this.$store.commit('removeDrawer');
						this.$store.commit('removeLoader');
=======

    					this.$store.commit('pushNewToDo', response.data);
						this.$store.commit('removeDrawer');
						this.$store.commit('removeLoader');

						
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
					}.bind(this))
					.catch(function (error) {
							console.log(error);
					});
				}
				else { //editing
<<<<<<< HEAD
=======

>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
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
<<<<<<< HEAD
		},
		mounted(){
			if (this.$store.state.curentToDoIndex !== null){
				this.titleLocal = this.$store.state.todosArr[this.$store.state.curentToDoIndex].title;
			}

		    // descriptionLocal: (
		    if (this.$store.state.curentToDoIndex !== null){  
		    	this.descriptionLocal = this.$store.state.todosArr[this.$store.state.curentToDoIndex].description
		    }
		}
	}	
</script>
<style scoped lang="scss">
=======
		}
	}	
</script>
<style csoped lang="scss">
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
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
<<<<<<< HEAD
		.drawer__form{
			width: 100%;
		}
=======
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
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
<<<<<<< HEAD
		.drawer_error{
			display: block;
			margin-top: -11px;
			color:  red;
			font-size: 10px;
		}
=======
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
	.loader{
		font-size: 100px; 
		animation: 1s linear 0s normal none infinite running rot;
		color:#b70c6c;
	}
</style>
