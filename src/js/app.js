let app = angular.module('todo', []);

app.controller('todofunc', ($scope) => {
    $scope.items = [];
    $scope.add=function(){
        $scope.items.push($scope.userInput);
        $scope.userInput='';
    }
});
