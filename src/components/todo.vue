<template>	
	<div>
<<<<<<< HEAD
		<header class="header"><span>{{this.$store.state.email}}</span> <button v-on:click="logOut">Log Out</button></header>
		<div v-if="this.$store.state.needLoader" class="loader-wrapper"><i class="loader fab fa-earlybirds"></i></div>
		<div v-else class="todo">
			<drawer v-if="needDrawer"></drawer>
			<button class=" todo__button todo__button_add" v-on:click="addNewToDo"><i class="fas fa-plus"></i></button>
			<main class="todo__list">
				<todoitem   v-for="(item, index) in todos"
				  v-bind:item="item"
				  v-bind:index= "index"
				  v-bind:key= "index"
				  v-on:delete-item="del"
				></todoitem>
			</main>
			<div v-if="isTodosEmpty">Your toDoList is empty</div>
		</div>
		
		<div class="popups" v-if="deleting.needPopup">
			<div class="deleting" >
				<p class="deleting__question" >Do you realy want to delete this note?</p>
				<button @click="confirmDel" class="deleting__btn">Yes</button>
				<button @click="cancelDel" class="deleting__btn">No</button>
			</div>
		</div>
		
=======
	<header class="header"><span>{{this.$store.state.email}}</span> <button v-on:click="logOut">Log Out</button></header>

	<div class="todo">
		<drawer v-if="needDrawer"></drawer>
		<button class=" todo__button todo__button_add" v-on:click="addNewToDo"><i class="fas fa-plus"></i></button>


		<main class="todo__list">
			<todoitem   v-for="(item, index) in todos"
			  v-bind:item="item"
			  v-bind:index= "index"
			  v-bind:key= "index"
			></todoitem>
		</main>
		<div v-if="isTodosEmpty">Your toDoList is empty</div>
	</div>
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
	</div>

</template>
<script>
	import todoitem from '@/components/todoitem.vue';
	import drawer from '@/components/drawer.vue';

	export default {
		data(){
			return{
<<<<<<< HEAD
				deleting: {
					needPopup: false
				}
=======
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
			}
		},
		computed: {
			needDrawer: function () {
				return this.$store.state.needDrawer;
			},
		   	todos: function() {
				return this.$store.state.todosArr;
		   	},
		   	isTodosEmpty:  function() {
				return (this.todos.length > 0) ? false : true;
<<<<<<< HEAD
		   	}
		},
		methods: {
			logOut: function(){
    			this.$router.push( {path: 'login'} );
				localStorage.removeItem('email');
    			this.$store.commit('upDateEmail', '');
    			this.$emit('logOut');
			},
			addNewToDo: function() { //after click on +
				this.$store.commit('addDrawer');

			},
			del: function(id, index) {
				this.deleting.needPopup = true;
				this.deleting.id = id;
				this.deleting.index = index;

			},
			confirmDel: function() {
				this.$axios.delete(`https://raysael.herokuapp.com/todo/${this.deleting.id}`);
				this.$store.commit('delToDO', this.deleting.index);
				this.deleting = {
					needPopup: false
				}
			},
			cancelDel: function() {
				this.deleting = {
					needPopup: false
				}
=======
		   	},
		},
		methods: {
			logOut: function(){
    			this.$store.commit('upDateEmail', '');
			},

			addNewToDo: function (){ //after click on +
				this.$store.commit('addDrawer');

>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
			}
		},
		components: {
			todoitem,
			drawer 
		},

	}
</script>
<<<<<<< HEAD
<style sсoped lang="scss">
=======
<style csoped lang="scss">
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
	.header{
		position: fixed;
		top: 0;
		left: 0;
		padding: 0 20px;
		height: 40px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: lightgrey;
	}
	.todo{
		padding: 50px;
		h1{
			font-size: 	40px;
			margin-bottom: 	15px;
		}	
	}
		.todo__list{
			margin: 30px 50px;
			display: flex;
			flex-wrap: wrap;
		}
		.todo__button{
			margin: 10px 0;	
			text-align: center;
		}
			.todo__button_clear{
			}
			.todo__button_add{
				position: fixed;
				right: 30px;
				bottom: 30px;
			    width: 54px;
    			height: 54px;
				border-radius: 10em;
				font-size: 44px;
			}
<<<<<<< HEAD
	.deleting{
		position: fixed;
		top: 50%;
		left: 50%;
		border: 1px solid grey;
		padding: 20px;
		transform: translate(-50%, -50%);
		background-color: white;
	}
	.popups{
		left: 0;
		top: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: #11111195;
	}
	.deleting__question{
		font-size: 18px;
	}
	.deleting__btn{
		margin: 10px;
		width: 100px;
		font-size: 18px;
	}
=======

>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f


	@media screen and (max-width: 480px){
		.todo__list{
			margin: 0;
			display: flex;
			flex-wrap: wrap;
    		justify-content: space-around;
		}
		.todo {
		    padding: 30px;
		}
	}
<<<<<<< HEAD
=======

			

>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
</style>