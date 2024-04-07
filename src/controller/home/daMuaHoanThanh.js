window.daMuaHT_Controller = function ($scope, $rootScope, $http) {
  let apiHoanThanh = banHangAPI + "?trangThai=false";

  $http.get(apiHoanThanh).then(function (response) {
    if (response.statusText === "OK") {
      $scope.spHoanThanh = response.data;
    }
  });

  $scope.muaLai = function (event, index) {
    event.preventDefault();

    $rootScope.spMuaNgay = {
      id: $scope.spHoanThanh[index].id,
      name: $scope.spHoanThanh[index].name,
      price: $scope.spHoanThanh[index].price,
      category: $scope.spHoanThanh[index].category,
      description: $scope.spHoanThanh[index].description,
      image: $scope.spHoanThanh[index].image,
      soLuong: $scope.spHoanThanh[index].soLuong,
      thanhTien:
        $scope.spHoanThanh[index].soLuong * $scope.spHoanThanh[index].price,
      trangThai: true,
    };
    window.location = "#muaHang";
  };
};
