app.controller('cachorradaCtrl', function($scope){

	$scope.cachorradas = [];
	
	$scope.buttonCancelar = function(){
		$scope.cachorrada = {};
		$scope.atualizar = false;
	}

	$scope.addCachorrada = function(){
		debugger;
		$scope.cachorrada.cod = $scope.cachorradas.length+1;
		$scope.cachorradas.push(
			$scope.cachorrada
			);
		$scope.cachorrada = {};
		$scope.atualizar = false;
	}

	$scope.atualizarCachorrada = function(cachorrada ,index){
		debugger;
		$scope.cachorradas[cachorrada.cod-1] =cachorrada;
		$scope.cachorrada = {};
		$scope.atualizar = false;
	}

	$scope.editarCachorrada = function(cachorradas){
		cachorradas.filter(function (cachorrada){
			if(cachorrada.selecionado){
				$scope.cachorrada.cod =cachorrada.cod; 
				$scope.cachorrada.nome =cachorrada.nome;
				$scope.cachorrada.raca =cachorrada.raca;
				$scope.atualizar = true;
			}
		})
	}

	$scope.deletarCachorrada = function(cachorradas){
		$scope.cachorradas= cachorradas.filter(function (cachorrada){
			if(!cachorrada.selecionado){
				return cachorrada;
			}})
	}

	

	$scope.buttonGentaiada = function(){
		window.location.href = "D:/Users/Ypcontrol/Desktop/AngularJS/criar_Editar_Gentaiada.html";
	}

	
	$scope.isSelected = function(cachorradas){
		return cachorradas.some(function(cachorradas){
			return cachorradas.selecionado;
		})
	}

	$scope.classe = "selecionado";

});