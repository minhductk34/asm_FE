window.search_Controller = function ($scope, $rootScope, $http) {
  // Khởi tạo mảng để lưu trữ kết quả tìm kiếm
  $scope.sanPhamSearch = [];

  // Hàm tìm kiếm dữ liệu
  $scope.searchData = function () {
    // Tạo URL API để tìm kiếm sản phẩm
    let api = productsAPI + "?name_like=" + $scope.Search;
    console.log(api);

    // Gửi yêu cầu GET để lấy dữ liệu từ API
    $http.get(api).then(function (response) {
      if (response.statusText === "OK") {
        $scope.sanPhamSearch = response.data;
        console.log($scope.sanPhamSearch);
      }
    });
  };

  // Khởi tạo biến index trong $rootScope
  $rootScope.index = -1;

  // Hàm chi tiết sản phẩm
  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.sanPhamSearch[index]);
  };
};
