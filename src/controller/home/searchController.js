window.search_Controller = function ($scope, $rootScope, $http) {
  $scope.search = $rootScope.search;
  let api = productsAPI + "?name_like=" + $scope.search;

  $http.get(api).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPhamSearch = response.data;
    }
  });

  $rootScope.index = -1;

  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.sanPhamSearch[index]);
  };
};
