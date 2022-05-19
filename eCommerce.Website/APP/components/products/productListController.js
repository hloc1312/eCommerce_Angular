(function (app) {
    app.controller('productListController', productListController);
    // khởi tạo service
    productListController.$inject = ['$scope', 'apiService', 'notificationService', '$ngBootbox', '$filter'];
    function productListController($scope, apiService, notificationService, $ngBootbox, $filter) {
        // list product category
        $scope.products = [];
        // phân trang
        $scope.page = 0;
        $scope.pagesCount = 0;
        // search
        $scope.keyword = "";
        $scope.search = search;

        // checked btn Delete
        $scope.$watch("products", function (n, o) {
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
                angular.forEach($scope.products, function (item) {
                    item.checked = true;
                });
                $scope.isAll = true;
            } else {
                angular.forEach($scope.products, function (item) {
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
                    checkedProducts: JSON.stringify(listID),
                }
            }
            apiService.del('api/product/deletemulti', config, function (result) {
                notificationService.displaySuccess('Xóa thành công ' + result.data + ' bản ghi');
                search();
            }, function (error) {
                notificationService.displayError('Xóa không thành công');
            });
        }

        //delete
        $scope.deleteProduct = deleteProduct;

        function deleteProduct(id) {
            $ngBootbox.confirm('Bạn có chắc muốn xóa?').then(function () {
                var config = {
                    params: {
                        id: id
                    }
                }
                apiService.del('api/product/delete', config, function () {
                    notificationService.displaySuccess('Xóa thành công');
                    search();
                }, function () {
                    notificationService.displayError('Xóa không thành công')
                })
            })
        }

        function search() {
            getProducts();
        }

        $scope.getProducts = getProducts;
        function getProducts(page) {
            page = page || 0;
            // config phân trang value (APi)
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 5,
                }
            }
            apiService.get('/api/product/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning("Không tìm được bản ghi nào");
                }
                //else {
                //    notificationService.displaySuccess("Đã tìm thấy " + result.data.TotalCount + " bản ghi");
                //}
                $scope.products = result.data.Items;
                // value infras/core/pagi
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;
            }, function (error) {
                console.log('Load product failed')
            })
        }
       
        $scope.getProducts();
    }
})(angular.module('eCommerceShop.products'))