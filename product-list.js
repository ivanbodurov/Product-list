
// Списък с продукти на AngularJS
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Хляб", "Сирене", "Кисело мляко", "Сапун", "Паста за зъби", "Яйца", "Душгел", "Маслини", "Маргарин", "Кашкавал", "Лютеница", "Прясно мляко", "Кайма"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
            document.getElementById('new-product').value = "";

        } else {
            $scope.errortext = "Моля, въведете нов продукт!";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});
