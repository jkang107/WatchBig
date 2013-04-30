var autocompleteApp = angular.module("autocompleteApp");
var autocompleteController = function($scope) {
	//http://jqueryui.com/autocomplete/
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"];
	$scope.autocompleteOptions = {
		source: availableTags
	}
}
autocompleteApp.('ui.config', {
	autocomplete: {
		minLength: 2,
		delay: 500
	}
});