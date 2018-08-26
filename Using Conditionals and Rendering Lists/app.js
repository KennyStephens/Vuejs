// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
// new Vue({
// 	el: '#app',
// 	data: {
// 		show: true
// 	}
// })

new Vue({
	el: '#app',
	data: {
		ingredients: ['meat', 'fruit', 'cookies'],
		persons: [
			{name: 'Kenny', age: 30, color: 'purple'},
			{name: 'Anna', age: 'unknown', color: 'blue'}
		]
	}
});