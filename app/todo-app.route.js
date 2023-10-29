(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        stateProvider
            .state('todo', {
                url: 'todo-app',
                template: '@@import ./todo-app.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();