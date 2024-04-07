var myApp = angular.module("myModule", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/trangChu", {
      templateUrl: "pages/trangChu.html",
      controller: trangChu_Controller,
    })
    .when("/trangChu/search", {
      templateUrl: "pages/search.html",
      controller: search_Controller,
    })
    .when("/gioiThieu", {
      templateUrl: "pages/gioiThieu.html",
    })
    .when("/dangNhap", {
      templateUrl: "pages/dangNhap.html",
      controller: account_Controller,
    })
    .when("/dangKy", {
      templateUrl: "pages/dangKy.html",
      controller: account_Controller,
    })
    .when("/doiMatKhau", {
      templateUrl: "pages/doiMatKhau.html",
      controller: doiMatKhau_Controller,
    })
    .when("/sanPham", {
      templateUrl: "pages/sanPham.html",
      controller: allSanPham_Controller,
    })
    .when("/sanPham/Canon", {
      templateUrl: "pages/sanPhamCanon.html",
      controller: canon_Controller,
    })
    .when("/sanPham/Nikon", {
      templateUrl: "pages/sanPhamNikon.html",
      controller: nikon_Controller,
    })
    .when("/sanPham/SamSung", {
      templateUrl: "pages/sanPhamSamSung.html",
      controller: samSung_Controller,
    })
    .when("/sanPham/Sony", {
      templateUrl: "pages/sanPhamSony.html",
      controller: sony_Controller,
    })
    .when("/daMua", {
      templateUrl: "pages/daMua.html",
      controller: daMua_Controller,
    })
    .when("/hoanThanh", {
      templateUrl: "pages/daMuaHoanThanh.html",
      controller: daMuaHT_Controller,
    })
    .when("/choThanhToan", {
      templateUrl: "pages/daMuaChoTT.html",
      controller: daMuaChoTT_Controller,
    })
    .when("/product", {
      templateUrl: "pages/product.html",
      controller: productsController,
    })
    .when("/gioHang", {
      templateUrl: "pages/gioHang.html",
      controller: gioHang_Controller,
    })
    .when("/category", {
      templateUrl: "pages/category.html",
      controller: category_Controller,
    })
    .when("/sanPham/detail/:id", {
      templateUrl: "pages/detailSanPham.html",
      controller: detail_Controller,
    })
    .when("/muaHang", {
      templateUrl: "pages/muaHang.html",
      controller: banHang_Controller,
    })
    .otherwise({
      redirectTo: "/trangChu",
    });
});

myApp.controller("detail_Controller", function ($scope, $routeParams, $route) {
  $scope.id = $routeParams.id;

  $scope.reload = function () {
    $route.updateParams({ id: $routeParams.id });
  };
});
