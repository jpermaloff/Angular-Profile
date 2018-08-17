'use strict';

function DataFactory() {
    let fInfo = null;
    const updateInfo = (info) => {
        fInfo = angular.copy(info);
        return fInfo;
    }

    return {
        updateInfo
    }
}

angular
.module('App')
.factory('DataFactory', DataFactory);