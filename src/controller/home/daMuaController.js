window.daMua_Controller = function ($scope, $rootScope, $http) {
  $http.get(banHangAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPham = response.data;
    }
  });

  $scope.thanhToan = function (event, index) {
    event.preventDefault();

    let p = $scope.sanPham[index];
    let api = banHangAPI + "/" + p.id;

    $scope.form_thanhToan = {
      id: p.id,
      name: p.name,
      price: p.price,
      category: p.category,
      description: p.description,
      image: p.image,
      soLuong: p.soLuong,
      thanhTien: p.thanhTien,
      trangThai: false,
    };

    $http.put(api, $scope.form_thanhToan).then(function () {
      alert("Thanh toán thành công");
      window.location = "#daMua";
    });
  };

  $scope.muaLai = function (event, index) {
    event.preventDefault();

    $rootScope.spMuaNgay = {
      id: $scope.sanPham[index].id,
      name: $scope.sanPham[index].name,
      price: $scope.sanPham[index].price,
      category: $scope.sanPham[index].category,
      description: $scope.sanPham[index].description,
      image: $scope.sanPham[index].image,
      soLuong: $scope.sanPham[index].soLuong,
      thanhTien: $scope.sanPham[index].soLuong * $scope.sanPham[index].price,
      trangThai: true,
    };
    window.location = "#muaHang";
  };
};
