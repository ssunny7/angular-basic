angular.module('feederapp.controllers').

/* Driver controller */
controller('driverController', function($scope, $routeParams, apiService) {
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  apiService.getDriverDetails($scope.id).success(function (response) {
    $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  });

  apiService.getDriverRaces($scope.id).success(function (response) {
    $scope.races = response.MRData.RaceTable.Races;
  });
});
