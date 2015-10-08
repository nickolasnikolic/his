artApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

artApp.controller('InsideController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    var productList = [
        'B00GAI7EO6',
        'B0067YWLL4',
        'B01444MS7U',
        'B000MUXLKE',
        'B00BXN1V9W',
        'B00PKO8HTW',
        'B010NOZMUK',
        'B00WQCRXC8',
        'B00JS54DIS'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });
}])

artApp.controller('OutsideController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    var productList = [
        'B00PU9WUH2',
        'B00Q7AYL2K',
        'B00LUOP01O',
        'B00BD6CU6W',
        'B014BTCG0W',
        'B00UZU6DTM',
        'B00I9R40E8',
        'B003G7VUNK',
        'B00AMADFIM'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('ClothingController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    var productList = [
        'B011CZLM0I',
        'B00ZIHOWZ4',
        'B00E98Z8OW',
        'B00U4CET0G',
        'B00QX3KTN6',
        'B012BGTVB4',
        'B008EQ716I',
        'B0045EPF98',
        'B00LSWJB86'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('BedroomController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    var productList = [
        'B0055DXL1C',
        'B0051HEDC8',
        'B00CP53EX8',
        'B007IO163Q',
        'B00ETUD9YG',
        'B01444K2N2',
        'B007Z2MKF4',
        'B0067YWSF8',
        'B0144502UO'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('WallsController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    var productList = [
        'B00EA0NSP0',
        'B00O3A6LYW',
        'B00MERFYTY',
        'B00X4K6GME',
        'B00EIPB7P0',
        'B00WY64PXQ',
        'B013IHR5XQ',
        'B00936KSBS',
        'B00YVDKXD6'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('GarageController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    var productList = [
        'B00SCKA6XQ',
        'B001DNRJLG',
        'B001355MX6',
        'B00DPH6DM4',
        'B001HT720O',
        'B00028CFC6',
        'B00FAHCDDA',
        'B00K4UWY2I',
        'B002S4L4RY'
    ];

    $scope.artworks = [];

    _.each(productList,function(asin, index, list){
        $.getJSON('../api/amazon/lookup/' + asin)
            .success(function (data) {
                $scope.artworks.push( data );
                console.log($scope.artworks);
                $scope.$apply();
            })
            .error(function (error) {
                console.log('error:');
                console.log(error);
            })
    });

}])

artApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {}])
