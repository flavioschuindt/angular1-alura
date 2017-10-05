angular.module('alurapic').controller('FotosController', function($scope, $http){
	$scope.fotos = []

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
});