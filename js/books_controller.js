var app = angular.module('myBookshelf', []);

app.controller('BooksController', ['$scope', function($scope) {

	$scope.books = [
		{
			'title': 'The Subtle Art of Not Giving a F*ck',
			'author': 'Mark Manson',
			'url': 'https://www.amazon.in/Subtle-Art-Not-Giving/dp/0062641549',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		}
		
		{
			'title': 'Getting Things Done: The Art of Stress-free Productivity',
			'author': 'David Allen',
			'url': 'https://www.amazon.in/Getting-Things-Done-Stress-free-Productivity/dp/0349410151',
			'hasMediumPost': false,
			'mediumPostUrl': '',
			'read': true
		}
	];

}]);
