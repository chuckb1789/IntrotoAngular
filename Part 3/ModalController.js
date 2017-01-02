angular.module('buttonApp')
       .controller('CustomController', ['btnCtl', 'close', function (btnCtl, close) {

btnCtl.close = close;

}]);
