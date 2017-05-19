angular.module('feederapp.controllers').

/* Drivers controller */
controller('driversController', function($scope, apiService) {
  $scope.nameFilter = null;
  $scope.driversList = [];
  $scope.searchFilter = function (driver) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
  };

  apiService.getDrivers().then(function onSuccess(response) {
    //Digging into the response to get the relevant data
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});
