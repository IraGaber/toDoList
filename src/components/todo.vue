<template>	
	<div>
	<header class="header"><span>{{email}}</span> <button v-on:click="logOut">Log Out</button></header>

	<div class="todo">
		<drawer v-if="needDrawer"  v-on:additem="createToDO" v-on:savechanges="saveChanges" v-on:closedrawer="closeDrawer" v-bind:elems="todos" v-bind:elemNumber="curentToDo" v-bind:type="drawerType" v-bind:author="email" v-bind:title="drawerTitle" v-bind:description="drawerDescription" ></drawer>
		<button class=" todo__button todo__button_add" v-on:click="addNewToDo"><i class="fas fa-plus"></i></button>


		<main v-if="todos.length != 0" class="todo__list">
			<todoitem   v-for="item in todos"
			  v-on:edit="editItem"
			  v-bind:item="item"
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
				//for drawer
				needDrawer: false,
				curentToDo: '',
				drawerType: 'add',
				drawerTitle: 'write something',
				drawerDescription: 'write something too',
				//end for drawer
				todos: this.todoArr
			}
		},
		methods: {
		
			logOut: function(){
				// this.todos = [];
				this.$emit('clearEmail');
			},

			addNewToDo: function (){ //after click on +
				console.log(this.email);
				this.drawerType = 'add';
				this.needDrawer = true;
			},
			createToDO: function(newToDO){ //after submiting values for adding
				this.todos.push(newToDO);
				this.needDrawer = false;

			},


			editItem: function (toDoIndex, title, description) { //after click on pen
				this.drawerType = 'edit';
				this.needDrawer = true;
				this.curentToDo = toDoIndex;
				this.drawerTitle = title;
				this.drawerDescription = description;

			},
			saveChanges: function ( toDoIndex, newTitle, newDescription) {  //after submiting changes

				this.needDrawer = false;
				for (let i = 0; i < this.todos.length; i++) { //find need necessary elem in local todos array and change it's properties
					if(this.todos[i]._id == toDoIndex){
						this.todos[i].title = newTitle;
						this.todos[i].description = newDescription;
					} 
				}
				this.drawerTitle = 'write something';
				this.drawerDescription = 'write something too';
				this.curentToDo = '';
			},
			closeDrawer: function () {
				this.needDrawer = false;
				this.drawerTitle = 'write something';
				this.drawerDescription = 'write something too';
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

		props:['email', 'todoArr']
	}
</script>
<style csoped lang="scss">
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