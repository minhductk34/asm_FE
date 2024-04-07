window.doiMatKhau_Controller = function ($scope, $http) {
  $scope.form_account = {
    id: "",
    name: "",
    user: "",
    password: "",
    sdt: "",
    chucVu: true,
  };

  $http.get(accountAPI).then(function (response) {
    if (response.statusText === "OK") {
      $scope.acc = response.data;
    }
  });

  $scope.newPassWord = "";
  $scope.ConfirmDoiMK = "";
  $scope.account = "";
  $scope.oldPassWord = "";

  $scope.doiMatKhau = function (event) {
    event.preventDefault();

    if ($scope.account.length == 0) {
      alert("Account không được để trống");
      return false;
    }

    if ($scope.oldPassWord.length == 0) {
      alert("Old password không được để trống");
      return false;
    }

    if ($scope.newPassWord.length == 0) {
      alert("New password không được để trống");
      return false;
    }
    if ($scope.ConfirmDoiMK.length == 0) {
      alert("Confirm không được để trống");
      return false;
    }

    if ($scope.newPassWord != $scope.ConfirmDoiMK) {
      alert("New PassWord và confirm phải giống nhau");
      return false;
    }

    var dem = -1;
    var indexSP = 0;

    for (var i of $scope.acc) {
      if (i.user == $scope.account && i.password == $scope.oldPassWord) {
        dem = 0;
        indexSP = $scope.acc.indexOf(i);
      }
    }

    if (dem == 0) {
      $scope.form_account.id = $scope.acc[indexSP].id;
      $scope.form_account.name = $scope.acc[indexSP].name;
      $scope.form_account.user = $scope.acc[indexSP].user;
      $scope.form_account.password = $scope.newPassWord;
      $scope.form_account.sdt = $scope.acc[indexSP].sdt;
      $scope.form_account.chucVu = $scope.acc[indexSP].chucVu;

      let api = accountAPI + "/" + $scope.acc[indexSP].id;
      $http.put(api, $scope.form_account).then(function () {
        alert("Thay đổi mật khẩu thanh cong");
      });
    } else {
      alert("Account hoặc Password không chính xác");
      return false;
    }
  };
};
