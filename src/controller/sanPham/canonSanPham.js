window.canon_Controller = function ($scope, $rootScope, $http) {
  $scope.canon = [];

  let api = productsAPI + "?category=Canon";
  console.log(api);
  $http.get(api).then(function (response) {
    if (response.statusText === "OK") {
      $scope.spCanon = response.data;
    }
  });

  $rootScope.index = -1;

  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.spCanon[index]);
  };
};
