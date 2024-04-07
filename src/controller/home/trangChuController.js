window.trangChu_Controller = function ($scope, $rootScope, $http) {
  $scope.search = "";
  let api = productsAPI + "?_page=1&_limit=6";

  $http.get(api).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPham = response.data;
    }
  });

  let apispMoi = productsAPI + "?_page=1&_limit=20";

  $http.get(apispMoi).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPhamMoi = response.data;
    }
  });

  $rootScope.index = -1;

  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.sanPham[index]);
  };

  $scope.detailSPMoi = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.sanPhamMoi[index]);
  };

  $rootScope.search = $scope.search;
};
