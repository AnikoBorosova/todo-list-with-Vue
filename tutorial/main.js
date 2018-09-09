const app = new Vue({
	el: "#app",
	data: {
		name: "Moricka",
		age: 8
	}
});

const app2 = new Vue({
	el: "#app-2",
	data: {
		message: "Secret message"
	}
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'eat' },
      { text: 'sleep' },
      { text: 'repeat' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Good Morning!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ""
  }
});

// Registering components

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
      { id: 3, text: 'meat'}
    ]
  }
})