angular.module('feederapp.controllers', []).
controller('driversController', function($scope, apiService) {
    $scope.nameFilter = null;
    $scope.driversList = [];

    apiService.getDrivers().success(function (response) {
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
});