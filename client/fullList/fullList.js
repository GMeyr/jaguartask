angular.module('jaguarTask.main', [])

.controller('listController', function($scope, $location){
  $scope.dummyList = {
      id: 2,
      name: 'task list 2',
      tasks: [{
        id: 03,
        name: 'work out',
        notes: 'all day',
        priority: 'high',
        dueDate: "1/7/2015",
        created: "1/6/2015",
        done: true
      },{
        id: 04,
        name: 'sleep',
        notes: 'all night',
        priority: 'low',
        dueDate: "1/10/2015",
        created: "1/14/2015",
        done: false
      }
      ]
    };
  $scope.currentList = $scope.dummyList;/* switch for this fn:
                       function(){
    //use $location
                       }; */

  $scope.basicTaskKeys = ["done", "dueDate", "created", "priority", "notes"];
  
});