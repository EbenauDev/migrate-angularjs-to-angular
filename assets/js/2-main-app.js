(() => {
    angular
        .module('todoApp', ['ui.router']);
})();
(() => {
    angular
        .module('todoApp')
        .component('headerComponent', {
            template: '<div class="header"><div class="__logo"><span>TODO</span></div><div class="__acoes"><a ui-sref="todo.list">Lista de Tarefas</a></div></div>',
        })
})();
(() => {
    angular
        .module('todoApp')
        .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo', {
                url: '/',
                template: '<div><h1>TODO APP</h1><ui-view></ui-view></div>',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();
(() => {
    angular
        .module('todoApp')
        .controller('TodoAppController', TodoAppController);

    TodoAppController.$inject = [];
    function TodoAppController() {
        let vm = this;
        vm.$onInit = activate;
        
        function activate() {

        }
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
                url: 'list',
                template: '<div><h1>LIST TODO FORM</h1></div>',
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
            .state('todo.new', {
                url: 'list/new',
                template: '<div><h1>NEW TODO FORM</h1></div>',
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
                url: 'list/edit',
                template: '<div><h1>EDIT TODO FORM</h1></div>',
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
                url: 'list/delete',
                template: '<div><h1>DELETE TODO FORM</h1></div>',
                controller: 'TodoAppController',
                controllerAs: 'vm',
            });
    }
})();

(() => {
    angular
        .module('todoApp');
})();