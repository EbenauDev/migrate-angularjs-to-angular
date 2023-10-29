var template = '@@import ./new-todo.html';

(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.new', {
                url: 'todo-app/new',
                template: '@@import ./new-todo.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();