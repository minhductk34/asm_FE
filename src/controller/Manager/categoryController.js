window.category_Controller = function ($scope, $http) {
  $scope.form_Category = {

    name: "",
  };

  $scope.viTri = -1;

  $http.get(categoryAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.category = response.data;
    }
  });

  //   Delete
  $scope.removesCategory = function (event, index) {
    event.preventDefault();

    let c = $scope.category[index];
    let api = categoryAPI + "/" + c.id;
    $http.delete(api).then(function () {
      $scope.category.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  // detail
  $scope.detailCategory = function (event, index) {
    event.preventDefault();
    let c = $scope.category[index];
    $scope.form_Category = angular.copy(c);
    $scope.viTri = index;
  };

  // add
  $scope.addCategory = function (event) {
    event.preventDefault();

    $http.post(categoryAPI, $scope.form_Category).then(function (response) {
      $scope.category.push(response.data);
      alert("Them thanh cong");
    });
  };

  //   Update
  $scope.updateCategory = function (event) {
    event.preventDefault();

    let c = $scope.category[$scope.viTri];
    let api = categoryAPI + "/" + c.id;
    $http.put(api, $scope.form_Category).then(function (response) {
      $scope.category[$scope.viTri] = response.data;
      alert("Cap nhat thanh cong");
    });
  };
};
