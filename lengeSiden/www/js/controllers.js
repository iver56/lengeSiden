lengeSidenApp.controller("ListCtrl", function($scope, $firebase) {
  $scope.newMessage = {text: ""};
  var ref = new Firebase(firebaseUrl);
  var sync = $firebase(ref);
  $scope.messages = sync.$asArray();

  $scope.addItem = function(name) {
    $scope.messages.$add($scope.newMessage);
  };

  $scope.showModal = function() {
    console.log('show modal');
  };
});
