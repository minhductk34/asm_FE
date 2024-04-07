window.samSung_Controller = function ($scope, $rootScope, $http) {
  let api = productsAPI + "?category=SamSung";

  $http.get(api).then(function (response) {
    if (response.statusText === "OK") {
      $scope.spSamSung = response.data;
    }
  });

  $rootScope.index = -1;

  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.spSamSung[index]);
  };
};
