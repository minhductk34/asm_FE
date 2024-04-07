window.gioHang_Controller = function ($scope, $rootScope, $http) {
  $http.get(gioHangAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPham = response.data;
    }
  });

  $scope.removeGioHang = function (event, index) {
    event.preventDefault();

    let p = $scope.sanPham[index];
    let api = gioHangAPI + "/" + p.id;
    $http.delete(api).then(function () {
      $scope.sanPham.splice(index, 1);
    });
  };

  // $scope.form_gioHang = {
  //   id: "",
  //   name: "",
  //   price: "",
  //   category: "",
  //   description: "",
  //   image: "",
  //   soLuong: "",
  // };

  // $scope.congSl = function (event, index) {
  //   event.preventDefault();
  // };

  // $scope.truSl = function (event, index) {
  //   event.preventDefault();
  // };

  // $scope.slGioHang = $scope.sanPham.length;
};
