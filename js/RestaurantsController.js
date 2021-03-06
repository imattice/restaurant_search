Bestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
    $scope.restaurants = [{name: 'Montage', location: '123 Main St.', food_type: 'Cajun'}, {name: 'Portland City Grill', location: '30th floor of the Pink Building', food_type: 'New American Dishes with an Asian Touch'}];
    $scope.addRestaurant = function() {
        $scope.restaurants.push({ name: $scope.name, location: $scope.location, food_type: $scope.foodType, image: $scope.image });
        $scope.name = null;
        $scope.location = null;
        $scope.foodType = null;
        // $scope.image = "'css/image_placeholder.png'";
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
