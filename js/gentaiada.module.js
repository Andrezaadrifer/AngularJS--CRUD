var app = angular.module('GentaiadaModel', []);
app.filter('ola', function (){
    return function(){
        return " Agora vc escolhe : Pessoas ou Animais";
    }
});