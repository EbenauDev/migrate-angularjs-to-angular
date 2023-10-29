(() => {
    angular
        .module('todoApp', ['ui.router']);
})
(() => {
    angular
        .module('todoApp')
        .controller('TodoAppController', TodoAppController);

    TodoAppController.$inject = [];
    function TodoAppController() {
        let vm = this;
    }
})();
(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.list', {
                url: 'todo-app/list',
                template: '',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();
(() => {
    angular
        .module('todoApp');
})();
var template = '';

(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.new', {
                url: 'todo-app/new',
                template: '',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();
(() => {
    angular
        .module('todoApp');
})();
var template = '';


(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.edit', {
                url: 'todo-app/edit',
                template: '',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();
(() => {
    angular
        .module('todoApp');
})();
(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo.delete', {
                url: 'todo-app/edit',
                template: '',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();

(() => {
    angular
        .module('todoApp');
})();