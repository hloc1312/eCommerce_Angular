/// <reference path="../../../assets/admin/libs/angular/angular/angular.js" />

(function () {
    angular.module('eCommerceShop.application_users', ['eCommerceShop.common']).config(config); // ui-router
    // inject service
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    // config routing
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('application_users', {
            url: "/application_users",
            parent: 'base',
            templateUrl: "/APP/components/application_users/applicationUserListView.html", // view
            controller: "applicationUserListController"
        }).state('add_application_user', {
            url: "/add_application_user",
            parent: 'base',
            templateUrl: "/APP/components/application_users/applicationUserAddView.html", // view
            controller: "applicationUserAddController"
        }).state('edit_application_user', {
            url: "/edit_application_user/:id",
            parent: 'base',
            templateUrl: "/APP/components/application_users/applicationUserEditView.html", // view
            controller: "applicationUserEditController"
        });
    }
})();