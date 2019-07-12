<template>
	<div v-if="!isDel" class="todo-item" :key="index">
		<div class="todo-item__header">
			<button class="todo-item__btn todo-item__btn_edit" v-on:click="edit"><i class="fas fa-pen"></i></button>
			<button class="todo-item__btn todo-item__btn_del" v-on:click="del"><i class="fas fa-trash"></i></button>
		</div>
		<div class="todo-item__main">
			<h3 class="todo-item__title">{{item.title}}</h3>
			<p class="todo-item__description">{{item.description}}</p>
		</div>
	</div>
</template>

<script>	
	export default {
  		data(){
  				return{
					isChecked: '',
					isDel: false,
				}
  			},
  			methods: {
  					edit: function () {
  						// debugger;
						this.$emit('edit', this.index);	
  					},
  					del: function () {
  						this.isDel = true;
  					}
  			},
  			props: ['item','index']
  		}

</script>
<style csoped lang="scss">
	.todo-item{
		width: 250px;
		align-items: center;
		margin: 10px;
		background-color: #d8d8e9;
	}
		.todo-item__btn{
			background-color: transparent;
			border: none;
			outline: none;
			font-size: 20px;
		}
		.todo-item__main{
			padding: 10px;
		}
		.todo-item__title{
			min-height: 40px;
			margin: 10px;
		}
		.todo-item__description{
			height: 130px;
			overflow: auto;

		}


		.todo-item__header{
			width: 100%;
			height: 40px;
			box-sizing: border-box;
			border-bottom: 1px solid black;
			display: flex;
			justify-content: flex-end;
			
		}
	
	@media screen and (max-width: 480px){
		.todo-item{
			width: 100%;
		}
		.todo-item__description{
			height: 80px;
		}
	}
</style>
	