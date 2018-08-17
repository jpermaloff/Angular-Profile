" use strict";
const profile = {
template: `
<section class="container">
<section class="profilePic"></section>
<h1>{{ $ctrl.info.name }} </h1>
<p>{{ $ctrl.info.contact }}</p>
<p>{{ $ctrl.info.bio }}</p>
<button>Edit Profile</button>
</section>
`,
controller: ['DataFactory', function(DataFactory) {
const vm = this;
vm.info = {
    name: "Grant Chirpus",
    contact: "grant@grandcircus.co",
    bio: "I am cool. I have a good job. I like to play Tetris. I am pretty ok at angularJS"

}
}]
}
angular
    .module("App")
    .component("profile", profile)
