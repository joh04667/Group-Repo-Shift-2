var app = angular.module("yellowApp", []);

app.controller("YellowController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];



  $scope.getUsers = function() {
    $http.get("/users").then(function(response) {
     console.log('created users');
    }); //  $http.get
    $scope.updateUsers();
  };  //  $scope.getUsers


  $scope.updateUsers = function() {
    $http.get("/all").then(function(response) {
      $scope.usersList = response.data;
    });
  };

  $scope.deleteUser = function(user) {
    $http.delete("/deleteUsers/" + user._id).then(function(response) {
      console.log("Deleted");
    $scope.updateUsers();
    }); //  $http.delete
  };  //  $scope.deleteUser

  $scope.destroyUsers = function() {
    $http.delete("/destroyusers").then(function(response) {
      console.log('kaboom');
      $scope.updateUsers();
    });
  };

  $scope.updateUsers();

}]); // controller
