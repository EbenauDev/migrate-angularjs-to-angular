(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.delete', {
                url: 'list/delete',
                template: '@@import app/pages/delete-todo/delete-todo.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();