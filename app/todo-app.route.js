(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo', {
                url: '/',
                template: '@@import app/todo-app.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();