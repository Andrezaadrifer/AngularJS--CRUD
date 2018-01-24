var app = angular.module('CachorradaModel', []);
app.filter('ola', function (){
    return function(){
        return " Agora vc escolhe : Pessoas ou Animais";
    }
});