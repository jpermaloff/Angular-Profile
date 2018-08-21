" use strict";
angular
    .module("App")
     .config(($routeProvider) => {
        $routeProvider
        .when("/profile", {
            template: "<profile></profile>"            
        })
            .when("/edit-profile", {
                template: "<edit-profile></edit-profile>"              
            })
    });
