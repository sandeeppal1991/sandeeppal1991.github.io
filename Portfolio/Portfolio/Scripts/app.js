﻿var app = angular.module("portfolio", ['ngSanitize']);

app.controller("portController", function ($scope, $http, $sce) {
    $scope.$sce = $sce;
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.modalData = {};
    $http.get('/Scripts/data.json').success(function (data) {
        $scope.works = data;
        $scope.modalData = data.projects[0];
    });

    $scope.OpenModal = function (project) {

        $scope.modalData = project;
        $("#portfolioModal1").modal();
        console.log(project);
    }
});