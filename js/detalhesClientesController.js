var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);

app.controller('detalhesClientes', function($scope, $http){

    $scope.maskDataHora = '99/99/9999 99:99';

    $scope.dados = [];
        
    $http
        .get("js/json/clienteselecionado.json")
        .success(function(data){
            $scope.dados = data;
        })
        .error(function(){
            alert("Não foi possível carregar os dados");
    
    });
    
    $scope.pontos = [];
        
    $http
        .get("js/json/pontos.json")
        .success(function(data){
             console.log(data);
            $scope.pontos = data;
        })
        .error(function(){
            alert("Não foi possível carregar os dados");

    });

    $scope.notas = [];
    
    $scope.notas.push(
        { loja : "The Fifties", numnota : 479243, datanota : "16/07/2016 00:07", formapagamento : "Dinheiro", valor : "R$ 24,30" }
    );
    
    $scope.adicionaNota = function(){
        var loja = document.getElementById("nomeloja");
        var numnota = document.getElementById("numnota");
        var datanota = document.getElementById("datanota");
        var formapagamento = document.getElementById("formapagamento");
        var valor = document.getElementById("vlrnota");
        
        $scope.notas.push(
            { loja : loja.value, numnota : numnota.value, datanota : datanota.value, formapagamento : formapagamento.value, valor : "R$ " + valor.value }
        );
        
        loja.value = "";
        numnota.value = "";
        datanota.value = "";
        formapagamento.value = "";
        valor.value = "";
    }

 });