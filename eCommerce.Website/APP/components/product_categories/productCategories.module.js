/// <reference path="../../../assets/admin/libs/angular/angular/angular.js" />

(function () {
    angular.module('eCommerceShop.product_categories', ['eCommerceShop.common']).config(config); // ui-router
    // inject service
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    // config routing
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('product_categories', {
            url: "/product_categories",
            parent: 'base',
            templateUrl: "/APP/components/product_categories/productCategoryListView.html", // view
            controller: "productCategoryListController"
        }).state('add_product_category', {
            url: "/add_product_category",
            parent: 'base',
            templateUrl: "/APP/components/product_categories/productCategoryAddView.html", // view
            controller: "productCategoryAddController"
        }).state('edit_product_category', {
            url: "/edit_product_category/:id",
            parent: 'base',
            templateUrl: "/APP/components/product_categories/productCategoryEditView.html", // view
            controller: "productCategoryEditController"
        });
    }
})();