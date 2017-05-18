angular.module('feederapp.controllers', []).
controller('driversController', function($scope, apiService) {
    $scope.nameFilter = null;
    $scope.searchFilter = function(driver) {
      var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

    $scope.driversList = [];

    apiService.getDrivers().success(function (response) {
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
}).
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