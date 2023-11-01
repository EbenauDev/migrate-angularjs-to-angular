(() => {
    angular
        .module('todoApp')
        .controller('TodoAppController', TodoAppController);

    TodoAppController.$inject = [];
    function TodoAppController() {
        let vm = this;
        vm.$onInit = activate;
        
        function activate() {

        }
    }
})();