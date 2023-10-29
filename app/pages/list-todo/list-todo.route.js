(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.list', {
                url: 'todo-app/list',
                template: '@@import ./list-todo.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();