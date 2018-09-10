var userInputValue = "";
var todoArray = [];

/*function addTask() {
	todoArray.push(userInputValue);
	userInputValue = "";
	return;
}
*/

const app = new Vue({
	el: "#app",
	data: {
		userInput: userInputValue,
		todos: todoArray//,
		//checked: false,
		//visible: true
	},
	methods: {
		addTask: function() {
			//this.todos.push(this.userInput);
			this.todos.push({
				checked: false,
				visible: true,
				todoText: this.userInput
			});
			this.userInput = "";
			return;
		},
		deleteTask: function(index) {
			//this.visible = false;
			this.todos.splice(index, 1);
		}
	}
});

window.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		app.addtask();
		//console.log(this);
	}
});

// things to work out
// 1. cross only the current task
// 2. delete only the current task
// 3. work it out without this???
// 4. call a function from another vue function

// v-input does not work
// colors like primary, secondary does not work

// vue.js file
// unit test
