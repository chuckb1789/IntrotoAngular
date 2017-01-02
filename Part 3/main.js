angular.module('buttonApp', [])
       .controller('buttonController', buttonTrail)

function buttonTrail () {
  var btnCtl = this;

  btnCtl.customResult=null;

  btnCtl.showModal({
      templateUrl: "customModal.html",
      // controller: "CustomController"
      }).then(function(modal) {
        modal.close.then(function(result) {
        btnCtl.customResult = "All good!";
        });
      });

    };
