angular.module("feederapp.services", []).
    factory("apiService", function($http){
        var api = {};

        api.getDrivers = function() {
            return $http({
               method: 'JSONP',
               url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        return api;
});
