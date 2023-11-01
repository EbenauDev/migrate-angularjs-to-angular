(() => {
    angular
        .module('todoApp')
        .component('headerComponent', {
            template: '@@import app/components/header/header.component.html',
        })
})();