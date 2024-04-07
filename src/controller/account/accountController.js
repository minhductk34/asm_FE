window.account_Controller = function ($scope, $http) {
  $scope.form_account = {
    id: "",
    name: "",
    user: "",
    password: "",
    sdt: "",
    chucVu: true,
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
      $scope.form_account.password +
      "&chucVu=" +
      $scope.form_account.chucVu;

    $http.get(api).then(function (response) {
      if (response.statusText === "OK") {
        $scope.acc = response.data;
      }

      if ($scope.acc.length == 0) {
        alert("Đăng nhập không thành công");
        return false;
      }

      if ($scope.form_account.chucVu) {
        window.location = "#product";
      } else {
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
};
