angular.module('alurapic').controller('FotosController', function($scope, $http){
	$scope.fotos = []

	$scope.mensagem = '';

	$http.get("v1/fotos")
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});

	/*var promessa = $http.get("v1/fotos");

	promessa.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(erro){
		console.log(erro);
	});*/

	$scope.remover = function(foto){
		$http.delete('v1/fotos/' + foto._id)
		.success(function() {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		})
		.error(function() {
			console.log(erro);
			$scope.mensagem = 'Não foi possível remover a foto '+foto.titulo;
		});
	}

});