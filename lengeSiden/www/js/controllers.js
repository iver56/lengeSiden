lengeSidenApp.controller("ListCtrl", function($scope, $firebase, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/new-item-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.newItem = {
    name: "",
    interval: 7 //number of days
  };

  $scope.showDelete = false;
  $scope.toggleShowDelete = function() {
    $scope.showDelete = !$scope.showDelete;
  };

  var ref = new Firebase(firebaseUrl);
  var sync = $firebase(ref);
  $scope.items = sync.$asArray();

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.saveNewItem = function() {
    $scope.items.$add($scope.newItem);
    $scope.modal.hide();
  };

  $scope.intervals = [
    {days:0.5, name: "To ganger hver dag"},
    {days:1, name: "Hver dag"},
    {days:2, name: "Annenhver dag"},
    {days:7, name: "Hver uke"},
    {days:14, name: "Annenhver uke"},
    {days:30, name: "Hver måned"},
    {days:61, name: "Annenhver måned"},
    {days:91, name: "Hvert kvartal"},
    {days:182, name: "Hvert halvår"},
    {days:365, name: "Hvert år"}
  ]
});
