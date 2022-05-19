/// <reference path="../../../assets/admin/libs/angular/angular/angular.js" />

(function () {
    angular.module('eCommerceShop.application_groups', ['eCommerceShop.common']).config(config); // ui-router
    // inject service
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    // config routing
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('application_groups', {
            url: "/application_groups",
            parent: 'base',
            templateUrl: "/APP/components/application_groups/applicationGroupListView.html", // view
            controller: "applicationGroupListController"
        }).state('add_application_group', {
            url: "/add_application_group",
            parent: 'base',
            templateUrl: "/APP/components/application_groups/applicationGroupAddView.html", // view
            controller: "applicationGroupAddController"
        }).state('edit_application_group', {
            url: "/edit_application_group/:id",
            parent: 'base',
            templateUrl: "/APP/components/application_groups/applicationGroupEditView.html", // view
            controller: "applicationGroupEditController"
        });
    }
})();