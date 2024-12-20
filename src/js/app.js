let app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.items = JSON.parse(localStorage.getItem('items')) || []; 

    $scope.addItem = function() {
        if ($scope.userInput) {
            $scope.items.push({ text: $scope.userInput, selected: false });
            localStorage.setItem('items', JSON.stringify($scope.items));
            $scope.userInput = '';
        } else {
            alert('Please enter some text.'); 
        }
    };

    $scope.deleteItem = function(index) {
        $scope.items.splice(index, 1); 
        localStorage.setItem('items', JSON.stringify($scope.items));
    };

    $scope.deleteSelected = function() {
        $scope.items = $scope.items.filter(item => !item.selected); 
        localStorage.setItem('items', JSON.stringify($scope.items));
    };

    $scope.hasSelected = function() {
        return $scope.items.some(item => item.selected); 
    };
});

