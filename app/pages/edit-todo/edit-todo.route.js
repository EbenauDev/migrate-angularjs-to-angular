var template = '@@import ./edit-todo.html';


(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.edit', {
                url: 'list/edit',
                template: '@@import app/pages/edit-todo/edit-todo.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();