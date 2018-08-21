" use strict";
const profile = {
template: `
<section class="container">
<section class="profilePic"></section>
<h1>{{ $ctrl.user.name }} </h1>
<p>{{ $ctrl.user.contact }}</p>
<p>{{ $ctrl.user.bio }}</p>
<button ng-click="$ctrl.edit($ctrl.user);">Edit Profile</button>
</section>
`,
controller: ['DataService', '$location', function(DataService, $location) {
const vm = this;
vm.user = DataService.getUserProfile();
vm.edit = () => {
    $location.path("/edit-profile")
}
}]
}
angular
    .module("App")
    .component("profile", profile)
