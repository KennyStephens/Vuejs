new Vue({
  el: '#exercise',
  data: {
    name: 'Kenny',
    age: 30,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg'
  },
  methods: {
    randomNum: function () {
      return Math.floor(Math.random() * 2);
    }
  }
});
