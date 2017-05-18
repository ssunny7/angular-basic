angular.module("feederapp", [
    "feederapp.controllers",
    "feederapp.services",
    "ngRoute"
]).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
        when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
        otherwise({redirectTo: '/drivers'});
}]);
