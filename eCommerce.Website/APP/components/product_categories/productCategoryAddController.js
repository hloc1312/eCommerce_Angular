(function (app) {
    app.controller('productCategoryAddController', productCategoryAddController);
    // inject
    productCategoryAddController.$inject = ['apiService', '$scope', 'notificationService','$state','commonService'];

    function productCategoryAddController(apiService, $scope, notificationService, $state, commonService) {
        $scope.productCategory = {
            CreatedDate: new Date(),
            Status: true,
        }

        //Hàm get seo
        $scope.GetSeoTitle = GetSeoTitle;
        function GetSeoTitle() {
            $scope.productCategory.Alias = commonService.getSeoTitle($scope.productCategory.Name);
        }

        // hàm submit form 
        $scope.AddProductCategory = AddProductCategory;
        function AddProductCategory() {
            apiService.post('api/productcategory/create', $scope.productCategory, function (result) {
                notificationService.displaySuccess(result.data.Name + ' đã được thêm mới ');
                $state.go('product_categories');
            }, function (error) {
                notificationService.displayError("Thêm mới không thành công");

            })
        }

        // hàm load parent
        function loadParentCategory() {
            apiService.get('api/productcategory/getallparents', null, function (result) {
                $scope.parentCategories = result.data;
            }, function () {
                console.log('Cannot get list parent');
            });
        }
        loadParentCategory();
    }
})(angular.module('eCommerceShop.product_categories'))