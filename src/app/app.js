function MovieModel(name, image, movieDetails){
    var self = this;
    self.name = name;
    self.image = image;
    self.movieDetails = movieDetails;
    self.detailsShown = ko.observable(false)
    self.showDetails = function() {
        self.detailsShown() ? self.detailsShown(false) : self.detailsShown(true);
    }
}

function MovieDetailsModel(director, performer, releaseYear, description){
    var self = this;
    self.director = director;
    self.performer = performer;
    self.releaseYear = releaseYear;
    self.description = description;
    self.concatenatedPerformer = ko.computed(function() {
        var string = "";
        for (const element of self.performer) {
            string += element + ", ";
        }
        return string.substr(0, string.length -2);
    });
}

function CategoryModel(category, movies){
    var self = this;
    self.category = category
    self.movies = movies;
}

function StreamingViewModel(){
    var self = this;
    self.chosenFilm = ko.observable();
    self.categories = ko.observableArray([
        new CategoryModel("Neue Filme", ko.observableArray([
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Gute Absichten richten verheerenden Schaden an, als Tony Stark unwissentlich Ultron, ein K.I.-Monster schafft, das durch Massenvernichtung den Weltfrieden erreichen will.")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
        ])),
        new CategoryModel("Beliebte Filme", ko.observableArray([
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
        ])),
        new CategoryModel("Nochmal Ansehen", ko.observableArray([
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
            new MovieModel("Avengers: Age of Ultron", "https://a-static.besthdwallpaper.com/avengers-endgame-tapete-3840x2160-39967_54.jpg",
                new MovieDetailsModel("Joss Whedon", ["RDJ", "Chris Evans", "Marc Ruffalo"],2012, "Description")),
         ]))
    ])

    self.goToMovie = function(movie) {
        self.chosenFilm(movie);
    }

    self.goToMainMenu = function() {
        self.chosenFilm(null);
    }
};


ko.applyBindings(new StreamingViewModel());



