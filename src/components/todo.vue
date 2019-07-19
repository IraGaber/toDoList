<template>	
	<div>
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
	</div>
	</div>

</template>
<script>
	import todoitem from '@/components/todoitem.vue';
	import drawer from '@/components/drawer.vue';

	export default {
		data(){
			return{
			}
		},
		computed: {
			needDrawer: function () {
				return this.$store.state.needDrawer
			},
		   	todos: function() {
				return this.$store.state.todosArr
		   	}
		},
		methods: {
			logOut: function(){
    			this.$store.commit('upDateEmail', '');
			},

			addNewToDo: function (){ //after click on +
				this.$store.commit('addDrawer');

			}
		},
		components: {
			todoitem,
			drawer 
		},

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