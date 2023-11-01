(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.new', {
                url: 'list/new',
                template: '@@import app/pages/new-todo/new-todo.html',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();