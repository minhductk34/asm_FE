window.allSanPham_Controller = function ($scope, $rootScope, $http) {
  $http.get(productsAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPham = response.data;
    }
  });

  $rootScope.index = -1;

  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.sanPham[index]);
  };
};
