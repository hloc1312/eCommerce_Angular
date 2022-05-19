/// <reference path="../../../assets/admin/libs/angular/angular/angular.js" />

(function () {
    angular.module('eCommerceShop.application_roles', ['eCommerceShop.common']).config(config); // ui-router
    // inject service
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    // config routing
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('application_roles', {
            url: "/application_roles",
            parent: 'base',
            templateUrl: "/APP/components/application_roles/applicationRoleListView.html", // view
            controller: "applicationRoleListController"
        }).state('add_application_role', {
            url: "/add_application_role",
            parent: 'base',
            templateUrl: "/APP/components/application_roles/applicationRoleAddView.html", // view
            controller: "applicationRoleAddController"
        }).state('edit_application_role', {
            url: "/edit_application_role/:id",
            parent: 'base',
            templateUrl: "/APP/components/application_roles/applicationRoleEditView.html", // view
            controller: "applicationRoleEditController"
        });
    }
})();