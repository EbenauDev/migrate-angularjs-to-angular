var template = '@@import ./edit-todo.html';


(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.edit', {
                url: 'todo-app/edit',
                template: '@@import ./todo-app.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();