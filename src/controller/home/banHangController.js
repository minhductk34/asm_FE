window.banHang_Controller = function ($scope, $rootScope, $http) {
  $scope.muaNgay = $rootScope.spMuaNgay;

  $scope.thanhToan = function (event) {
    event.preventDefault();

    $scope.muaNgay.trangThai = false;

    $http.post(banHangAPI, $scope.muaNgay).then(function () {
      alert("Thanh toán thành công");
      window.location = "#sanPham";
    });
  };
};
