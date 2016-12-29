angular.module('button',[])
       .controller('myButton', buttonFunction)

function buttonFunction () {
  var myBtn = this;
  myBtn.title = "mainButton";
  myBtn.mainButton = function() {
    console.log('clicked');
  }
  myBtn.mainButton2 = function() {
    myBtn.click = 'You Clicked the Button!'
  }

  myBtn.candy = ["Twizzlers","Hershey","Jolly Rancher"]

  myBtn.mainButton3 = function () {
    myBtn.candy.push(candy)
  }
}







//
// function mainButtonActionFunction2($scope) {
//    $scope.message = "YEAH!"
// }
