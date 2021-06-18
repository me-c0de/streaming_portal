ko.components.register('movie-detail-widget', {
    template: { require: 'movie-detail-widget/movie-detail-widget.html' },
    viewModel: { require: 'movie-detail-widget/movie-detail-widget' }
});

var newMovies = ko.observableArray([
    { name: "Avengers Infinity War"},
    { name: "Avengers Endgame"},
    { name: "Spiderman: Far From Home"}
]);

var popularMovies = ko.observableArray([
    { name: "Black Panther"},
    { name: "Doctor Strange"},
    { name: "Antman and the Wasp"}
]);

var watchAgain = ko.observableArray([
    { name: "Ironman 1"},
    { name: "Captain America: Civil War"},
    { name: "Thor: Ragnarok"}
]);

ko.applyBindings(newMovies);
ko.applyBindings(popularMovies);
ko.applyBindings(watchAgain);





