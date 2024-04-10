window.user_Controller = function ($scope, $http) {
    $scope.viTri = -1;
    $scope.users = []; // Khởi tạo mảng rỗng để lưu trữ danh sách người dùng

    // Hàm để lấy danh sách người dùng từ API
    function getUsers() {
        $http.get(accountAPI)
            .then(function (response) {
                if (response.statusText === "OK") {

                    $scope.users = response.data; // Gán dữ liệu người dùng từ phản hồi API vào mảng $scope.users
                    console.log(response.data);
                }
            })
            .catch(function (error) {
                console.error('Lỗi khi lấy danh sách người dùng:', error);
            });
    }

    // Gọi hàm để lấy danh sách người dùng khi controller được khởi tạo
    getUsers();

    $scope.form_Users = {

        name: "",
        user: "",
        password: "",
        sdt: "",
        chucVu: "",
    };

    // Hàm chi tiết người dùng
    $scope.detailUser = function (event, index) {
        event.preventDefault();
        let user = $scope.users[index];
        $scope.form_Users.id = user.id;
        $scope.form_Users.name = user.name;
        $scope.form_Users.user = user.user;
        $scope.form_Users.password = user.password;
        $scope.form_Users.sdt = user.sdt;
        $scope.form_Users.chucVu = user.chucVu;

        $scope.viTri = index;
    };

    $scope.removeUser = function (event, index) {
        event.preventDefault();

        let user = $scope.users[index];
        let api = accountAPI + "/" + user.id;

        // Hiển thị hộp thoại xác nhận trước khi xóa người dùng
        if (confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
            $http.delete(api).then(function () {
                $scope.users.splice(index, 1);
                alert("Xóa thành công");
            }).catch(function (error) {
                console.error('Lỗi khi xóa người dùng:', error);
            });
        } else {
            // Không làm gì nếu người dùng chọn hủy bỏ
            console.log("Xóa người dùng đã bị hủy bỏ");
        }
    };


    $scope.validate = {
        name: false,
        user: false,
        password: false,
        sdt: false,
        chucVu: false,
    }



    function checkEmptyFields() {
        $scope.validate.name = $scope.form_Users.name === "" ? true : false;
        $scope.validate.user = $scope.form_Users.user === "" ? true : false;
        $scope.validate.password = $scope.form_Users.password === "" ? true : false;
        $scope.validate.sdt = $scope.form_Users.sdt === "" ? true : false;
        $scope.validate.chucVu = $scope.form_Users.chucVu === "" ? true : false;

        if (!$scope.validate.name &&

            !$scope.validate.user &&
            !$scope.validate.password &&
            !$scope.validate.sdt &&
            !$scope.validate.chucVu) {
            return true;
        } else {
            return false;
        }
    };

    // Hàm thêm người dùng
    $scope.addUser = function (event) {
        event.preventDefault();
        if (checkEmptyFields()) {

            $http.post(accountAPI, $scope.form_Users).then(function (response) {
                $scope.users.push(response.data);
                alert("Thêm người dùng thành công");
            }).catch(function (error) {
                console.error('Lỗi khi thêm người dùng:', error);
            });
        } else {
            console.log("Failed to add user");
        }



    };


    // Hàm cập nhật người dùng
    $scope.updateUser = function (event) {
        event.preventDefault();


        if (user.id) {
            let user = $scope.users[$scope.viTri];
            let api = accountAPI + "/" + user.id;
            if (checkEmptyFields()) {
                $http.put(api, $scope.form_Users).then(function (response) {
                    $scope.users[$scope.viTri] = response.data;
                    alert("Cập nhật thành công");
                })
                    .catch(function (error) {
                        console.error('Lỗi khi cập nhật người dùng:', error);
                    });
            }
        } else { 
            alert("Vui long chọn sản phẩm cần update ")
         }


    };
};
