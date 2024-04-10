window.account_Controller = function ($scope, $http) {
  $scope.form_account = {
    name: "",
    user: "",
    password: "",
    sdt: "",
    chucVu: "client",
  };

  $scope.confirmDangKy = "";
  $scope.newPassWord = "";

  $scope.dangNhap = function (event) {
    event.preventDefault();

    if ($scope.form_account.user.length == 0) {
      alert("User không được để trống");
      return false;
    }

    if ($scope.form_account.password.length == 0) {
      alert("PassWord không được để trống");
      return false;
    }

    let api =
      accountAPI +
      "?user=" +
      $scope.form_account.user +
      "&password=" +
      $scope.form_account.password


    $http.get(api)
      .then(function (response) {
        if (response.statusText !== "OK" || response.data.length === 0) {
          alert("Đăng nhập không thành công");
          return false;
        }

        var userData = response.data[0];
        localStorage.setItem("id", userData.id);
        localStorage.setItem("user", userData.user);

        if (userData.chucVu === "admin") {
          alert("Đăng nhập thành công");
          window.location = "#product";
        } else if (userData.chucVu === "client") {
          window.location = "#trangChu";
        }
      });

  };

  $scope.dangKy = function (event) {
    event.preventDefault();

    if ($scope.form_account.name.length == 0) {
      alert("Name không được để trống");
      return false;
    }

    if ($scope.form_account.sdt.length == 0) {
      alert("SDT không được để trống");
      return false;
    }

    if (isNaN(10 / $scope.form_account.sdt)) {
      alert("SDT Phải là số");
      return false;
    }

    if ($scope.form_account.user.length == 0) {
      alert("Account không được để trống");
      return false;
    }

    if ($scope.form_account.password.length == 0) {
      alert("PassWord không được để trống");
      return false;
    }

    if ($scope.confirmDangKy.length == 0) {
      alert("confirm không được để trống");
      return false;
    }

    if ($scope.confirmDangKy != $scope.form_account.password) {
      alert("PassWord và confirm phải giống nhau");
      return false;
    }

    $http.post(accountAPI, $scope.form_account).then(function () {

      alert("Đăng ký thành công");

    });
  };
  $scope.dangXuat = function () {
    localStorage.removeItem("id", userData.id);
    localStorage.removeItem("user", userData.user)
    window.location = "#dangNhap"

  }
};
