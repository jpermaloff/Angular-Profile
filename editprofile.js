" use strict";
const editProfile = {
template: `
    <form>
    <label>Name </label><input type="text" ng-model="$ctrl.newInfo.name">
    <label>Contact </label><input type="text" ng-model="$ctrl.newInfo.contact">
    <label>Bio </label><input type="text" ng-model="$ctrl.newInfo.bio">
    <button ng-click='$ctrl.updateInfo($ctrl.newInfo);'>Update</button>
    </form>
    `,
    controller: ['DataFactory', function(DataFactory){
        let vm = this;
        vm.info = null;
        vm.newInfo = null;
        vm.updateInfo = (info) => {
            DataFactory.udateInfo(info);
        };
    }]
}

    angular
    .module("App")
    .component("editProfile", editProfile)
