<template>	
	<div>
	<header><span>{{email}}</span> <button v-on:click="clearAll">Delete All</button></header>

	<div class="todo">
		<drawer v-if="needDrawer"  v-on:additem="createToDO" v-on:savechanges="saveChanges" v-on:closedrawer="closeDrawer" v-bind:elems="todos" v-bind:elemNumber="curentToDo" v-bind:type="drawerType"></drawer>
		<button class=" todo__button todo__button_add" v-on:click="addNewToDo"><i class="fas fa-plus"></i></button>


		<main v-if="todos.length != 0" class="todo__list">
			<todoitem   v-for="(item, index) in todos"
			  v-on:edit="editItem"
			  v-bind:item="item"
			  v-bind:index="index"
			  type="add"
			></todoitem>
		</main>
		<span v-else><br>Your ToDoList is empty<br></span>
			

	</div>
	</div>

</template>
<script>
	import todoitem from '@/components/todoitem.vue';
	import drawer from '@/components/drawer.vue';

	export default {
		data(){
			return{
				newToDo: '',
				todos:[],   //title and description will be inside

				needDrawer: false,
				curentToDo: '',
				drawerType: 'add'
			}
		},
		methods: {
		
			clearAll: function(){
				this.todos = [];
			},

			addNewToDo: function (){ //after click on +
				console.log(this.email);
				this.drawerType = 'add';
				this.needDrawer = true;
			},
			createToDO: function(title, description){ //after submiting values for adding
				this.todos.unshift({
					title: title,
					description: description
				});
				this.needDrawer = false;
				// debugger;

			},


			editItem: function (toDoIndex) { //after click on pen
				this.drawerType = 'edit';
				this.needDrawer = true;
				this.curentToDo = toDoIndex;

			},
			saveChanges: function ( toDoIndex, newTitle, newDescription) {  //after submiting changes

				this.needDrawer = false;
				this.todos[toDoIndex].title = newTitle;
				this.todos[toDoIndex].description = newDescription;
				debugger;
				this.curentToDo = '';
			},
			closeDrawer: function () {
				this.needDrawer = false;
				
			}
		},
		computed: {
		    todosIsEmpty: function () {
		   		return this.todos.length == 0 ? true : false;
		   	}
		     
	    },
		components: {
			todoitem,
			drawer 
		},
		props:['email']
	}
</script>
<style csoped lang="scss">
	header{
		position: fixed;
		top: 0;
		left: 0;
		padding: 0 20px;
		height: 50px;
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

			

</style>