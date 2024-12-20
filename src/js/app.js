let app = angular.module('todo', []);

app.controller('todofunc', ($scope) => {
    $scope.items = [];

    $scope.add=function(){
        if ($scope.userInput && $scope.items.indexOf($scope.userInput) === -1){
        $scope.items.push($scope.userInput);
        $scope.userInput='';
        }else{
            alert('این تسک قبلا اضافه شده است!');
        }
    }
});
