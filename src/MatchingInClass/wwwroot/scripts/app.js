(function () {
	var app = angular.module("app", []);
	
	app.controller('GameController', function ($scope) {
		this.tileNames = ['8-ball', 'baked-potato', 'dinosaur', 'kronos', 'rocket', 'that-guy', 'zeppelin', 'cards'];
	});
})();