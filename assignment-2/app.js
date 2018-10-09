new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert('Alert Message');
            },
            // keydownValue: function(event) {
            //     this.value = event.target.value;
            // }
        }
    });