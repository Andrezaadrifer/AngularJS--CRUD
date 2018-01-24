app.controller('gentaiadaCtrl', function ($scope) {

	$scope.gentaiadas = [];

	$scope.button1 = function () {
		alert("Cancelar!");
	}

	$scope.addGentaiada = function () {
		$scope.gentaiada.cod = count();
		$scope.gentaiadas.push(
			$scope.gentaiada
		);
		$scope.gentaiada = {};
		$scope.atualizar = false;
	}

	num = 0;

	function count() {
		++num;
		return num;
	}

	$scope.atualizarGentaiada = function (gentaiada, index) {
		$scope.gentaiadas[gentaiada.cod - 1] = gentaiada;
		$scope.gentaiada = {};
		$scope.atualizar = false;
	}

	$scope.buttonCancelar = function () {
		$scope.gentaiada = {};
		$scope.atualizar = false;
	}

	$scope.buttonCachorrada = function () {
		window.location.href = "C:/Users/Egen Maq 4/Desktop/AngularJS/criar_Editar_Cachorrada.html";
	}

	$scope.criarGentaiada = function () {
		alert("Pag criar gentaiada!");
		window.location.href = "C:/Users/Egen Maq 4/Desktop/AngularJS/criar_Editar_Gentaiada.html";
	}

	$scope.editarGentaiada = function (gentaiadas) {
		gentaiadas.filter(function (gentaiada) {
			if (gentaiada.selecionado) {
				$scope.gentaiada.cod = gentaiada.cod;
				$scope.gentaiada.nome = gentaiada.nome;
				$scope.gentaiada.idade = gentaiada.idade;
				$scope.atualizar = true;
			}
		})
	}

	$scope.deletarGentaiada = function (gentaiadas) {
		$scope.gentaiadas = gentaiadas.filter(function (gentaiada) {
			if (!gentaiada.selecionado) {
				return gentaiada;
			}
		})
	}

	$scope.isUm = function(gentaiadas) {
		if(gentaiadas.size === 1){
			return true;
		}else{
			return false;
		}
	}
	$scope.isSelected = function(gentaiadas) {
		return gentaiadas.some(function (gentaiada) {
			return gentaiada.selecionado;
		})
	}

	tmSelect = 0;
	
	$scope.OI = function(){
		
	}

	$scope.QtdSelect = function () {
		debugger;
		if ($scope.isSelected(gentaiadas)) {
			$scope.tmSelect = ++tmSelect;
		}else{
			debugger;
			$scope.tmSelect =tmSelect-1;
		}
		return tmSelect;
	}

	$scope.classe = "selecionado";

});