window.sony_Controller = function ($scope, $rootScope, $http) {
  let api = productsAPI + "?category=Sony";

  $http.get(api).then(function (response) {
    if (response.statusText === "OK") {
      $scope.spsony = response.data;
    }
  });

  $rootScope.index = -1;

  $scope.detail = function (index) {
    $rootScope.index = index;
    $rootScope.detailSP = angular.copy($scope.spsony[index]);
  };
};
