angular.module('feederapp.controllers', []);

angular.module('feederapp', [
  'feederapp.services',
  'feederapp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/drivers", {templateUrl: "views/drivers.html", controller: "driversController"}).
  when("/drivers/:id", {templateUrl: "views/driver.html", controller: "driverController"}).
  otherwise({redirectTo: '/drivers'});
}]);
