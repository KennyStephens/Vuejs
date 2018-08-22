// new Vue({
//   el: '#app',
//   data: {
//     counter: 0,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     increase: function(step, event) {
//       this.counter += step;
//     },
//     updateCoordinates: function(event) {
//       this.x = event.clientX;
//       this.y = event.clientY;
//     },
//     alertMe: function() {
//       alert('Alert!');
//     }
//   }
// });

// Two Way Binding
// new Vue({
//   el: '#app',
//   data: {
//     name: 'Kenny'
//   }
// });

// new Vue({
//   el: '#app',
//   data: {
//     counter: 0,
//     secondCounter: 0
//   },
//   computed: {
//     output: function() {
//       console.log('Computed');
//       return this.counter > 5? 'Greater 5' : 'Smaller 5';
//     }
//   },
//   watch: {
//     counter: function(value) {
//       var vm = this;
//       setTimeout(function() {
//         vm.counter = 0;
//       },2000)
//     }
//   },
//   methods: {
//     result: function() {
//       console.log('Method');
//       return this.counter > 5? 'Greater 5' : 'Smaller 5';
//     }
//   }
// });

new Vue({
  el: '#app',
  data: {
    link: 'https://google.com'
  },
  methods: {
    changeLink: function() {
      this.link = 'https://apple.com'
    }
  }
}); 