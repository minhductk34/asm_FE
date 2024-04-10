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


  $scope.thanhToanAll = function () {
    console.log(123);
    // Lặp qua danh sách sản phẩm để thanh toán từng sản phẩm
    angular.forEach($scope.sanPham, function (product, index) {
      let api = banHangAPI + "/" + product.id;

      let form_thanhToan = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
        soLuong: product.soLuong,
        thanhTien: product.thanhTien,
        trangThai: false,
      };

      $http.put(api, form_thanhToan)
        .then(function () {
          // Xóa sản phẩm khỏi giỏ hàng sau khi thanh toán
          $scope.sanPham.splice(index, 1);
        })
        .catch(function (error) {
          console.error('Lỗi khi thanh toán sản phẩm:', error);
        });
    });

    alert("Thanh toán tất cả sản phẩm thành công");
    window.location = "#daMua";
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
