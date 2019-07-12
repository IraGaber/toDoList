<template>
	<div>
		<div class="drawer-bg" v-on:click = "close"></div>
		<div class="drawer">
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
		props: ['elems', 'elemNumber', 'type'],
		data () {
		  return {
		      titleLocal:  (this.elems[this.elemNumber]) ? this.elems[this.elemNumber].title : 'd',
		      descriptionLocal:  (this.elems[this.elemNumber]) ?  this.elems[this.elemNumber].description : 'd'
		  }
		},

		
		methods: {
			changeTodoList: function() {
				if (this.type == 'add') {
					this.$emit('additem', this.titleLocal, this.descriptionLocal);
				}
				if (this.type == 'edit') {

					this.$emit('savechanges', this.elemNumber, this.titleLocal, this.descriptionLocal);
				}
			},
			close: function () {
				this.$emit('closedrawer');
		      	
				
			}
		},
		mounted(){
			// debugger;
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
		background-color: #aaaaaa50;
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
</style>
