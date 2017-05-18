angular.module("feederapp.services", []).
    factory("apiService", function($http){
        var api = {};

        api.getDrivers = function() {
            return $http({
               method: 'JSONP',
               url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        api.getDriverDetails = function(id) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        api.getDriverRaces = function(id) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
            });
        }

        return api;
});
