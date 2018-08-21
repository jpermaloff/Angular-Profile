" use strict";
const editProfile = {
template: `
    <form>
    <label>Name </label><input type="text" ng-model="$ctrl.user.name">
    <label>Contact </label><input type="text" ng-model="$ctrl.user.contact">
    <label>Bio </label><input type="text" ng-model="$ctrl.user.bio">
    <button ng-click='$ctrl.update($ctrl.user);'>Update</button>
    </form>
    `,
    controller: ['DataService', "$location", function(DataService, $location) {
        let vm = this;
        vm.user = DataService.getUserProfile();
        vm.update = (newInfo) => {
DataService.setUserProfile(newInfo)
 $location.path("/profile")
        }
    }]
}

    angular
    .module("App")
    .component("editProfile", editProfile)
