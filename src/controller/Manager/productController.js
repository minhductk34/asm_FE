window.productsController = function ($scope, $http) {
  $scope.viTri = -1;

  // get category
  $http.get(categoryAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.categorySP = response.data;
    }
  });

  // get product
  $http.get(productsAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.products = response.data;
    }
  });




  $scope.form_Products = {

    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    soLuong: "",
  };

  // detail
  $scope.detailProducts = function (event, index) {
    event.preventDefault();
    let p = $scope.products[index];
    $scope.form_Products.id = p.id;
    $scope.form_Products.name = p.name;
    $scope.form_Products.price = p.price;
    $scope.form_Products.category = p.category;
    $scope.form_Products.description = p.description;
    $scope.form_Products.image = p.image;
    $scope.form_Products.soLuong = p.soLuong;

    $scope.viTri = index;
  };

  //   Delete
  $scope.removesProducts = function (event, index) {
    event.preventDefault();

    let p = $scope.products[index];
    let api = productsAPI + "/" + p.id;

    // Hiển thị hộp thoại xác nhận
    if (confirm("Are you sure you want to delete this product?")) {
      $http.delete(api).then(function () {
        $scope.products.splice(index, 1);
        alert("Xóa thành công");
      })
        .catch(function (error) {
          console.error('Lỗi khi xóa sản phẩm:', error);
        });
    } else {
      // Không làm gì nếu người dùng không xác nhận
    }
  };

  $scope.validate = {
    name: false,
    price: false,
    category: false,
    description: false,
    soLuong: false,
  }


  function checkEmptyFields() {
    $scope.validate.name = $scope.form_Products.name === "" ? true : false;
    $scope.validate.price = $scope.form_Products.price === "" ? true : false;
    $scope.validate.category = $scope.form_Products.category === "" ? true : false;
    $scope.validate.description = $scope.form_Products.description === "" ? true : false;
    $scope.validate.soLuong = $scope.form_Products.soLuong === "" ? true : false;

    if (!$scope.validate.name &&

      !$scope.validate.price &&
      !$scope.validate.category &&
      !$scope.validate.description &&
      !$scope.validate.soLuong) {
      return true;
    } else {
      return false;
    }
  };

  // add
  $scope.addProducts = function (event) {
    event.preventDefault();
    if (checkEmptyFields()) {
      $http.post(productsAPI, $scope.form_Products).then(function (response) {
        $scope.products.push(response.data);
        alert("Them thanh cong");
      });
    }


  };

  //   Update
  $scope.updateProducts = function (event) {
    event.preventDefault();


    if (checkEmptyFields()) {
      let p = $scope.products[$scope.viTri];
      let api = productsAPI + "/" + p.id;
      $http.put(api, $scope.form_Products).then(function (response) {
        $scope.products[$scope.viTri] = response.data;
        alert("Cap nhat thanh cong");
      });
    }

  };
};
