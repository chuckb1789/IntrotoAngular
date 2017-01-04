angular.module('buttonApp', [])
       .controller('buttonController', buttonFunction)

function buttonFunction() {
  var btnCtl = this;

  btnCtl.clicked = false;

  btnCtl.reveal = function(){
    btnCtl.clicked = true;
    console.log ('clicked');
  }

  btnCtl.hide = function(){
    btnCtl.clicked = false;
  }
}
