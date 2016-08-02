angular.module('CaculatorApp', []);

angular.module('CaculatorApp').controller('MainController', function($scope) {

  $scope.display = '';
  $scope.numbersRight = [];
  $scope.numbersLeft = [];
  $scope.operators = [];


  $scope.addNumber=function(number) {
    if($scope.operators.length!=0){
      $scope.display += number;
      $scope.numbersRight.push(number);
      console.log('Right: ', $scope.numbersRight);
    }else {
      $scope.display += number;
      $scope.numbersLeft.push(number);
      console.log('Left', $scope.numbersLeft);
    }

  };

  $scope.addOperator = function(operator){
     $scope.display += operator;
     $scope.operators.push(operator);
  }


   $scope.calculate = function() {
      var sum = 0;

      while($scope.operators.length > 0){
        var right = $scope.numbersRight.join('');
        right = parseFloat(right);
        console.log(right);
        if(isNaN(right)){
          right = 0;
        }
        var left = $scope.numbersLeft.join('');
        left = parseFloat(left);
        console.log(left);
        if(isNaN(left)){
          left = 0;
        }

        var operator = $scope.operators.pop();
        sum += calc(left, right, op);

      }

      $scope.result = sum;
      $scope.display = $scope.result;
      console.log($scope.result);

  };

   function calc(left, right , operator){
    switch(operator){
      case '+':
        return left+ right;
      case '-':
        return left-right;
      case '*':
        return left * right;
      case '/':
        return left / right;
    }
    return 0;
  }

});
