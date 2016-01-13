angular.module('jaguarTask.simple', [])

.controller('simpleCtrl', function($scope, listFactory){
  $scope.msg = "this is from $scope";
  $scope.msg2 = listFactory.factoryMsg;
  $scope.submit = listFactory.submit;
})

.factory('listFactory', function(){
  var listObj = {
    factoryMsg: "this is from the factory",

    submit: function(data){
      console.log("form data", data);
      console.log("new list name", data.newListName);
    }
  };
  return listObj;
})