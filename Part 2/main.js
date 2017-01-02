angular.module('coloradoTrail', [])
       .controller('coloradoController', coHikeFun)
       .controller('leavePageController', leavePage)

function coHikeFun () {
  var hikeCtl = this;
  hikeCtl.title = ""

  hikeCtl.hoverIn = function() {
          hikeCtl.title = "!!";
          console.log("hovered!")
      }

  hikeCtl.hoverOut = function() {
          hikeCtl.title = "";
          console.log("unhovered!")
      }

}

function leavePage () {
  var linkCtl = this;
  linkCtl.link = true;
  linkCtl.clickLink = function(){
    if(!confirm("Do you want to go to the link?")){
      event.preventDefault();
      linkCtl.link = false;
      }
    }
  linkCtl.link2 = true;
  linkCtl.clickLink2 = function(){
    if(!confirm("Do you want to go tothe link?")){
      event.preventDefault();
      linkCtl.link2 = false;
      }
    }
}
