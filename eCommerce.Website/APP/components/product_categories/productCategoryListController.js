(function (app) {
    app.controller('productCategoryListController', productCategoryListController);
    // khởi tạo service
    productCategoryListController.$inject = ['$scope', 'apiService', 'notificationService', '$ngBootbox', '$filter'];
    function productCategoryListController($scope, apiService, notificationService, $ngBootbox, $filter) {
        // list product category
        $scope.productCategories = [];
        // phân trang
        $scope.page = 0;
        $scope.pagesCount = 0;
        // search
        $scope.keyword = "";
        $scope.search = search;

        // checked btn Delete
        $scope.$watch("productCategories", function (n, o) {
            var checked = $filter('filter')(n, { checked: true });
            if (checked.length) {
                $scope.selected = checked;
                $('#btnDelete').removeAttr('disabled');
            }
            else {
                $('#btnDelete').attr('disabled', 'disabled');
            }
        }, true);

        // select All
        $scope.selectAll = selectAll;
        $scope.isAll = false;
        function selectAll() {
            if ($scope.isAll == false) {
                angular.forEach($scope.productCategories, function (item) {
                    item.checked = true;
                });
                $scope.isAll = true;
            } else {
                angular.forEach($scope.productCategories, function (item) {
                    item.checked = false;
                });
                $scope.isAll = false;
            }
        }

        // delete Multiple
        $scope.deleMultiple = deleMultiple;
        function deleMultiple() {
            var listID = [];
            $.each($scope.selected, function (i, item) {
                listID.push(item.ID);
            });
            var config = {
                params: {
                    checkedProductCategory: JSON.stringify(listID),
                }
            }
            apiService.del('api/productcategory/deletemulti', config, function (result) {
                notificationService.displaySuccess('Xóa thành công ' + result.data + ' bản ghi');
                search();
            }, function (error) {
                notificationService.displayError('Xóa không thành công');
            });
        }

        //delete
        $scope.deleteProductCategory = deleteProductCategory;

        function deleteProductCategory(id) {
            $ngBootbox.confirm('Bạn có chắc muốn xóa?').then(function () {
                var config = {
                    params: {
                        id: id
                    }
                }
                apiService.del('api/productcategory/delete', config, function () {
                    notificationService.displaySuccess('Xóa thành công');
                    search();
                }, function () {
                    notificationService.displayError('Xóa không thành công')
                })
            })
        }

        function search() {
            getProductCategories();
        }

        $scope.getProductCategories = getProductCategories;
        function getProductCategories(page) {
            page = page || 0;
            // config phân trang value (APi)
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 5,
                }
            }
            apiService.get('/api/productcategory/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning("Không tìm được bản ghi nào");
                }
                //else {
                //    notificationService.displaySuccess("Đã tìm thấy " + result.data.TotalCount + " bản ghi");
                //}
                $scope.productCategories = result.data.Items;
                // value infras/core/pagi
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;
            }, function (error) {
                console.log('Load productcategory failed')
            })
        }
        $scope.getProductCategories();
    }
})(angular.module('eCommerceShop.product_categories'))