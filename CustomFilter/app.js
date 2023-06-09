(function () {
  'use strict';

  angular.module('CustomFilters', [])
  .controller('CustomFiltersController', CustomFiltersController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);
  
  // lovesFilter named as adding Filter to loves.
  CustomFiltersController.$inject = ['$scope', 'lovesFilter'];
  function CustomFiltersController ($scope, lovesFilter) {
    $scope.name = "Skye";
    $scope.hungerState = 'hungry';

    $scope.sayMessage = function () {
      var msg = "I like to eat snacks";
      return msg;
    };

    $scope.feedDog = function() {
      $scope.hungerState = "notHungry";
    };
      
    $scope.sayLovesMessage = function () {
      var msg = "I like to eat snacks";
      msg = lovesFilter(msg);
      return msg;
    };
  }
  
  function LovesFilter(){
    return function (input){
      input = (input || "" );
      input = input.replace("like", "love");
      return input;
    };
  }

  function TruthFilter(){
    return function (input, target, replace){
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }

})();