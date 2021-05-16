new Vue({
    el: '#app',
    data: {
        section: 0,
    },
    methods: {
        clickMenu: function (id, t) {
            for (i = 0; i < 3; i++) {
                this.$refs.menu.children[i].classList.remove('s');
            }
            t.classList.add('s');
            this.section = id;
        }
    }
})