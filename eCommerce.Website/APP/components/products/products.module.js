/// <reference path="../../../assets/admin/libs/angular/angular/angular.js" />


(function () {
    angular.module('eCommerceShop.products', ['eCommerceShop.common']).config(config); // ui-router
    // inject service
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    // config routing
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            
            .state('products', {
                url: "/products",
                parent: 'base',
                templateUrl: "/APP/components/products/productListView.html", // view
                controller: "productListController"
            }).state('product_add', {
                url: "/product_add",
                parent: 'base',
                templateUrl: "/APP/components/products/productAddView.html", // view
                controller: "productAddController"
            }).state('product_edit', {
                url: "/product_edit/:id",
                parent: 'base',
                templateUrl: "/APP/components/products/productEditView.html", // view
                controller: "productEditController"
            })
    }
})();