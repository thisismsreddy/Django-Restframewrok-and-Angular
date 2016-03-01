function Hello($scope, $http) {
    $http.get('http://localhost:8080/users/1/?format=json').
        success(function(data) {
            $scope.greeting = data;
        });
}