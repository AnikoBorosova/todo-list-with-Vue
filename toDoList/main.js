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
		todos: todoArray,
		//done: false,
		checked: false,
		visible: true
	},
	methods: {
		addTask: function() {
			this.todos.push(this.userInput);
			this.userInput = "";
			return;
		},
		/*taskDone: function() {
			this.done = true;
		},*/
		deleteTask: function() {
			this.visible = false;
		}
	}
});


// things to work out
// 1. cross only the current task
// 2. delete only the current task
// 3. work it out without this???
