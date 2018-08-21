'use strict';

function DataService() {
    const vm = this;
    vm.user = {
        name: "Snoopy",
        contact: "gmail.com",
        bio: "I am a cool dog"
    };
    vm.getUserProfile = () => {
        return vm.user;
    }
    vm.setUserProfile = (newInfo) => {
        vm.user = angular.copy(newInfo);
    }
}

angular
.module('App')
.factory('DataService', DataService);