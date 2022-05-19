/// <reference path="../assets/admin/libs/angular/angular/angular.js" />

(function () {
    angular.module('eCommerceShop', ['eCommerceShop.products', 'eCommerceShop.product_categories', 'eCommerceShop.application_roles', 'eCommerceShop.application_groups', 'eCommerceShop.application_users', 'eCommerceShop.statistics', 'eCommerceShop.common']).config(config).config(configAuthentication); // ui-router
    // inject service
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    // config routing
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('base', {
                url: "",
                templateUrl: "/APP/shared/views/baseView.html", // view
                abstract: true,
            })
            .state('login', {
                url: "/login",

                templateUrl: "/APP/components/login/loginView.html", // view
                controller: "loginController"
            })
            .state('home', {
                url: "/admin",
                parent: 'base',
                templateUrl: "/APP/components/home/HomeView.html", // view
                controller: "homeController"
            })
        $urlRouterProvider.otherwise('/login');
    }
    function configAuthentication($httpProvider) {
        $httpProvider.interceptors.push(function ($q, $location) {
            return {
                request: function (config) {
                    return config;
                },
                requestError: function (rejection) {
                    return $q.reject(rejection);
                },
                response: function (response) {
                    if (response.status == "401") {
                        $location.path('/login');
                    }
                    //the same response/modified/or a new one need to be returned.
                    return response;
                },
                responseError: function (rejection) {
                    if (rejection.status == "401") {
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
        });
    }
})();