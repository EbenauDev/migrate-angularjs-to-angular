(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.list', {
                url: 'list',
                template: '@@import app/pages/list-todo/list-todo.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();