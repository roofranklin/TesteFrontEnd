app.controller('listaClientes', function($scope, $http){

    $scope.dados = [];
        
        $http
            .get("js/json/clientes.json")
            .success(function(data){
                $scope.dados = data;
            })
            .error(function(){
                alert("Não foi possível carregar os dados");
            });

            $(function(){
                $("#pesquisarCliente").keyup(function(){
                    var texto = $(this).val();
                    
                    $(".listaClientes li").css("display", "block");
                    $(".listaClientes li").each(function(){
                        if($(this).text().indexOf(texto) < 0)
                           $(this).css("display", "none");
                    });
                });
            });

});