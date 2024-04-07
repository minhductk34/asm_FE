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
    id: "",
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
    $http.delete(api).then(function () {
      $scope.products.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  // add
  $scope.addProducts = function (event) {
    event.preventDefault();

    $http.post(productsAPI, $scope.form_Products).then(function (response) {
      $scope.products.push(response.data);
      alert("Them thanh cong");
    });
  };

  //   Update
  $scope.updateProducts = function (event) {
    event.preventDefault();

    let p = $scope.products[$scope.viTri];
    let api = productsAPI + "/" + p.id;

    $http.put(api, $scope.form_Products).then(function (response) {
      $scope.products[$scope.viTri] = response.data;
      alert("Cap nhat thanh cong");
    });
  };
};
