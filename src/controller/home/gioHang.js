window.gioHang_Controller = function ($scope, $rootScope, $http) {
  // Lấy dữ liệu sản phẩm từ API khi controller được khởi tạo

    $http.get(gioHangAPI)
    .then(function (response) {
        if (response.statusText === "OK") {
            console.log(response.data);
            $scope.sanPham = response.data;

            // Đếm số lượng sản phẩm
            var soLuongSanPham = response.data.length;

            $scope.soLuongSanPham = soLuongSanPham;

        }
    })
    .catch(function (error) {
        console.error('Lỗi khi lấy dữ liệu giỏ hàng:', error);
    });

  // Hàm xóa một sản phẩm khỏi giỏ hàng
  $scope.removeGioHang = function (event, index) {
    event.preventDefault();

    let product = $scope.sanPham[index];
    let api = gioHangAPI + "/" + product.id;
    $http.delete(api)
      .then(function () {
        // Xóa sản phẩm khỏi danh sách
        $scope.sanPham.splice(index, 1);
      })
      .catch(function (error) {
        console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
      });
  };

  // Hàm thanh toán tất cả sản phẩm trong giỏ hàng
  $scope.thanhToanAll = function () {
    // Lặp qua danh sách sản phẩm và cập nhật trạng thái thanh toán cho từng sản phẩm
    angular.forEach($scope.sanPham, function (product) {
      let api = banHangAPI + "/" + product.id;

      // Tạo đối tượng chứa dữ liệu cần gửi
      let data = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
        soLuong: product.soLuong,
        thanhTien: product.thanhTien,
        trangThai: true // Đánh dấu sản phẩm đã được thanh toán
      };

      // Gửi yêu cầu PUT để cập nhật trạng thái thanh toán của sản phẩm
      $http.put(api, data)
        .then(function () {
          // Chuyển hướng người dùng tới trang đã mua sau khi tất cả các sản phẩm đã được thanh toán
          window.location = "#daMua";
        })
        .catch(function (error) {
          console.error('Lỗi khi thanh toán sản phẩm:', error);
        });
    });
  };

};
