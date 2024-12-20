angular.module("todoApp", ['ngStorage']).controller("todoController", function ($scope, $localStorage) {
  $scope.todos = $localStorage.todos || [];
  $scope.$watch(
    "todos",
    function () {
      $localStorage.todos = $scope.todos;
    },
    true
  );

  $scope.addTodo = function () {
    if ($scope.newTodoText.trim() !== "") {
      $scope.todos.push({ text: $scope.newTodoText, completed: false });
      $scope.newTodoText = "";
    }
  };
  $scope.deleteTodo = function(index) {
    $scope.todos.splice(index, 1);
};

$scope.deleteCompletedTodos = function() {
    $scope.todos = $scope.todos.filter(function(todo) {
        return !todo.completed;
    });
};
});
