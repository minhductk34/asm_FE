window.detail_Controller = function ($scope, $rootScope, $http) {
  $scope.detail = $rootScope.detailSP;

  $scope.soLuong = 1;

  $scope.congSl = function (event) {
    event.preventDefault();
    $scope.soLuong = $scope.soLuong + 1;

    if ($scope.soLuong > $scope.detail.soLuong) {
      alert("Không còn đủ số lượng trong kho");
      $scope.soLuong = $scope.detail.soLuong;
      return false;
    }
  };

  $scope.truSl = function (event) {
    event.preventDefault();
    $scope.soLuong = $scope.soLuong - 1;

    if ($scope.soLuong < 0) {
      alert("Số lượng phải lớn hơn 0");
      $scope.soLuong = 1;
      return false;
    }
  };

  $scope.addGioHang = function (event) {
    event.preventDefault();

    $scope.form_gioHang = {
      id: $scope.detail.id,
      name: $scope.detail.name,
      price: $scope.detail.price,
      category: $scope.detail.category,
      description: $scope.detail.description,
      image: $scope.detail.image,
      soLuong: $scope.soLuong,
    };

    $http.post(gioHangAPI, $scope.form_gioHang).then(function () {
      alert("Đã thêm mới sản phẩm vào giỏ hàng");
      window.location = "#gioHang";
    });

    // let api = gioHangAPI + "/" + $scope.detail.id;

    // $http.get(api).then(function (response) {
    //   if (response.statusText === "OK") {
    //     $scope.gioHang = response.data;
    //   }
    // });

    // if ($scope.gioHang.length != 0) {
    //   $scope.form_gioHang.soLuong =
    //     $scope.form_gioHang.soLuong + $scope.gioHang.soLuong;

    //   $http.put(api, $scope.form_gioHang).then(function () {
    //     alert("Đã thêm mới sản phẩm vào giỏ hàng");
    //     window.location = "#gioHang";
    //   });
    // } else {

    // }
  };

  $scope.muaNgay = function (event) {
    event.preventDefault();

    $rootScope.spMuaNgay = {
      id: "",
      name: $scope.detail.name,
      price: $scope.detail.price,
      category: $scope.detail.category,
      description: $scope.detail.description,
      image: $scope.detail.image,
      soLuong: $scope.soLuong,
      thanhTien: $scope.soLuong * $scope.detail.price,
      trangThai: true,
    };
    window.location = "#muaHang";
  };

  let apiTuongTu =
    productsAPI + "?_page=1&_limit=6&category=" + $scope.detail.category;

  $http.get(apiTuongTu).then(function (response) {
    if (response.statusText === "OK") {
      $scope.sanPham = response.data;
    }
  });
};
