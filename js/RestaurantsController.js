Bestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
    $scope.restaurants = [];
    $scope.addRestaurant = function() {
        $scope.restaurants.push({ name: $scope.name, location: $scope.location, food_type: $scope.foodType });
        $scope.name = null;
        $scope.location = null;
        $scope.foodType = null;
    };

    $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index, 1);
    };

    $scope.search = {};
    $scope.setSearch = function() {
        var searchBy = $scope.search.value;
    };
});
