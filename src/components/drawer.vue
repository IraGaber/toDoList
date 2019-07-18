<template>
	<div>
		<div class="drawer-bg" v-on:click = "close">
			<i v-if="loading" class="loader fab fa-earlybirds"></i>
		</div>
		<div v-if="!loading" class="drawer">
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
		props: ['elems', 'elemNumber', 'type', 'author', 'title', 'description'],
		data () {
		  return {
		      titleLocal: this.title ,
		      descriptionLocal: this.description,
		      loading: false
		  }
		},

		
		methods: {
			changeTodoList: function() {
				this.loading = true;
				if (this.type == 'add') {
					axios.post('https://raysael.herokuapp.com/todo', {
					    author: this.author,
					    title: this.titleLocal.substr(0,25),
					    description: this.descriptionLocal

					 })  
					.then(function	(response){
						this.$emit('additem', response.data);
						this.loading = false;
						
					}.bind(this));
				}

				if (this.type == 'edit') {
					this.loading = true;

					axios.patch(`https://raysael.herokuapp.com/todo/${this.elemNumber}`, {
						title: this.titleLocal.substr(0,25),
						description: this.descriptionLocal
					})
					.then(function (response){
						this.$emit('savechanges', response.data._id, response.data.title, response.data.description);
						this.loading = false;
					}.bind(this))
				}
			},
			close: function () {
				this.$emit('closedrawer');
			}
		},
		mounted(){
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
