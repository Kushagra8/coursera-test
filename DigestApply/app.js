(function () {
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', CounterController);
  
  CounterController.$inject = ['$scope', '$timeout'];
  function CounterController ($scope, $timeout) {
    $scope.counter = 0;
    
    $scope.upCounter = function() {
      $timeout(function () {
        console.log("counter incremented");
        $scope.counter++;
      }, 2000);
    };

    // $scope.upCounter = function() {
    //   setTimeout(function () {
    //     $scope.$apply(function () {
    //       console.log("counter increments!");
    //       $scope.counter++;
    //     });        
    //   }, 2000);
    // };

    // $scope.upCounter = function() {
    //   setTimeout(function () {
    //     console.log("counter increments!");
    //     $scope.counter++;
    //     $scope.$digest();
    //   }, 2000)
    // };
  }
})();