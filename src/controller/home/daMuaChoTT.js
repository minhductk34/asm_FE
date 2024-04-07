window.daMuaChoTT_Controller = function ($scope, $rootScope, $http) {
  let apiHoanThanh = banHangAPI + "?trangThai=true";

  $http.get(apiHoanThanh).then(function (response) {
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
};
