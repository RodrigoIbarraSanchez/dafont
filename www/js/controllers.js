angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope, $http) {
    $scope.titulo = 'Lista de Fuentes';
    $http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyASOV-D-zYopncQtOMQolehgC5efKOEpO8')
      .then(function(response) {
            $scope.fonts = response.data.items;
        });
    $scope.canciones = [
      {nombre:'', artista:''},
    ];
    $scope.nuevaCancion = {nombre:'', artista:''};
    $scope.agregarCancion = function(){
      $scope.canciones.push(angular.copy($scope.nuevaCancion));
      $scope.nuevaCancion.nombre = null;
      $scope.nuevaCancion.artista = null;
    }

  })


  .controller('WishCtrl', function($scope) {

    $scope.items = [
      {nombre:'Roboto', artista:'Christian Robertson'},
    ];
    $scope.nuevoItem = {nombre:'', artista:''};
    $scope.agregarItem = function(){
      $scope.items.push(angular.copy($scope.nuevoItem));
      $scope.nuevoItem.nombre = null;
      $scope.nuevoItem.artista = null;
    }


  });
