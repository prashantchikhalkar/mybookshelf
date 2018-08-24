var app = angular.module('prashant'sBookshelf', []);

app.controller('BooksController', ['$scope', function($scope) {

	$scope.books = [
		{
			'title': 'The Subtle Art of Not Giving a F*ck',
			'author': 'Mark Manson',
			'url': 'https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		},
	];

}]);
