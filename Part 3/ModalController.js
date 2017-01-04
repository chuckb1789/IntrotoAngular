angular.module('buttonApp', [])
       .controller('btnCtl', [btnCtl, 'close', function (btnCtl, close) {

btnCtl.close = close;

}]);
