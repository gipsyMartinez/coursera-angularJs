(function(){
'use strict';
var app = angular.module('LunchCheck', []);

app.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope){
    $scope.message = '';
    $scope.messageEmptyItem = '';
    $scope.dishes = '';
    $scope.checkIfTooMuch = function(){
        if($scope.dishes == '') {
            $scope.message = 'Please enter data first';
            return;
        }
        var dishesArray = $scope.dishes.split(',').filter(function(v){return v.trim() !== ''});
        var count = $scope.dishes.split(',').length
        $scope.message = dishesArray.length > 3 ? 'Too much!' : 'Enjoy!';
        $scope.messageEmptyItem = count > dishesArray.length ? "I do not consider empty items" : "";
    }
}
})();