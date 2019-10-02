import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
	state:{
		needLoader: true,
		needDrawer: false,
		email: '',
		todosArr: [],
		curentToDoIndex: null //changing it before and after editing
	},
	mutations: {
		removeDrawer: (state) => state.needDrawer = false,
		addDrawer: (state) => state.needDrawer = true,
		removeLoader: (state) => state.needLoader = false,
		addLoader: (state) => state.needLoader = true,
		upDateEmail: function (state, newValue) {
			state.email = newValue;
		},
		upDatetodosArr: function(state, newArr){
		 state.todosArr = newArr;
		},
		editToDo(state, params){
			state.todosArr[state.curentToDoIndex].title = params.title;
			state.todosArr[state.curentToDoIndex].description = params.description;
		},
		pushNewToDo(state, newToDo){
		 state.todosArr.push(newToDo);
		},
		delToDO(state, index){
			state.todosArr.splice(index, 1);
		},
		changeCurentToDoIndex(state, value = null){
			state.curentToDoIndex = value
		}
	},
	actions: {
		loadTodosArr(context, email){
			context.commit('addLoader')
					console.log(`https://raysael.herokuapp.com/todo?author=${email}`);

			axios
				.get(`https://raysael.herokuapp.com/todo?author=${email}`)
				.then((response) => (
=======
	 state: {
				needLoader: false,
				needDrawer: false,
				email: '',
				todosArr: [],
				curentToDoIndex: null //changing it before and after editing
		},
		mutations: {
				removeDrawer: state => state.needDrawer = false,
				addDrawer: state => state.needDrawer = true,
				removeLoader: state => state.needLoader = false,
				addLoader: state => state.needLoader = true,
				upDateEmail: function (state, newValue) {
					state.email = newValue;
				},
				upDatetodosArr: function(state, newArr){
				 state.todosArr = newArr;
				},
				editToDo(state, params){
					state.todosArr[state.curentToDoIndex].title = params.title;
					state.todosArr[state.curentToDoIndex].description = params.description;
				},
				pushNewToDo(state, newToDo){
				 state.todosArr.push(newToDo);
				},
				delToDO(state, index){
					state.todosArr.splice(index, 1);
				},
				changeCurentToDoIndex(state, value = null){
					state.curentToDoIndex = value
				}
		},
	actions: {
		loadTodosArr(context, email){
			axios
				.get(`https://raysael.herokuapp.com/todo?author=${email}`)
				.then(response => (
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
					context.commit('upDateEmail', email),
					context.commit('upDatetodosArr', response.data),
					context.commit('removeLoader')
				))
				.catch(function (error) {
					console.log(error);
			})
<<<<<<< HEAD

				
=======
>>>>>>> 6902caacae1a38f1596f16194fb91eb110a4755f
		}
	}
})
