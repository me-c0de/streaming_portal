/*
new MovieModel("Titel", "URL_TO_IMAGE",
        new MovieDetailsModel("Regisseur", ["Darsteller 1", "Darsteller 2", "Darsteller 3"], 2015, "Beschreibung")),
 */

const newMovies = new CategoryModel("Neue Filme", 5, ko.observableArray([
    new MovieModel("Avengers: Age of Ultron", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B6D17EE56247DB49AC11AC031EB2FB43189D230EF3592C7C4808F9B0EB363FCD/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joss Whedon", ["Robert Downey Jr.", "Chris Evans", "Marc Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"], 2015, "Gute Absichten richten verheerenden Schaden an, als Tony Stark unwissentlich Ultron, ein K.I.-Monster schafft, das durch Massenvernichtung den Weltfrieden erreichen will.")),

    new MovieModel("The Avengers", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F48C2D492B31714C94AB0DD0BCF3D3CA7EAFB658F922BF313011C9D308B9B494/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joss Whedon", ["Robert Downey Jr.", "Chris Evans", "Marc Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"], 2012, "Als ein unerwarteter Feind die globale Sicherheit bedroht, braucht Nick Fury, Leiter der internationalen Friedenssicherungsbehörde S.H.I.E.L.D., ein Team, das die Welt vor einer Katastrophe bewahrt.")),

    new MovieModel("The Return of the First Avenger", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C9F6B7F677278D7E54A17A9469B46F1C6C0C8A96471910F355A262942B32D384/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joe Russo, Anthony Russo", ["Chris Evans", "Sebastian Stan", "Anthony Mackie", "Scarlett Johansson", "Cobie Smulders", "Frank Grillo"], 2014, "Im heutigen Washington D.C. arbeitet Steve Rogers, alias Captain America, mit Black Widow und dem neuen Verbündeten Falcon zusammen, um einen mächtigen und geheimnisvollen Feind zu bekämpfen.")),

    new MovieModel("Thor", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/973899DBFBE0A2D5588681989AD0C57E85010167E3F4023CE44CBB4615AFB677/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Kenneth Branagh", ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Stellan Skarsgård", "Kat Dennings"], 2011, "Thor soll den Thron von Asgard besteigen, bis er durch seine Arroganz einen uralten Krieg neu entfacht. Thor wird zur Erde verbannt und muss von dort aus seinen bösen Bruder Loki  davon abhalten, Odin zu stürzen und Asgard seinen bösen Machenschaften zu unterwerfen.")),

    new MovieModel("Guardians of the Galaxy", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72D45D883C538D76E4D510760E3883A4457ED4B0A81CC9D39347E5F5D59A0E6E/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("James Gunn", ["Chris Pratt", "Zoë Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Lee Pace"], 2014, "Der Abenteurer Peter Quill wird gejagt, seit er einem mächtigen, das Universum bedrohenden Schurken eine mysteriöse Kugel gestohlen hat. Um nicht gefangen zu werden, tut sich Quill mit Außenseiterhelden zusammen: mit Rocket, einem Waschbären; Groot, einem menschenähnlichen Baumwesen; der tödlich-rätselhaften Gamora; und Drax, dem Zerstörer.")),

    new MovieModel("Captain Marvel", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/980264E5D398E019B2DBD30C1100DAD0C1393EDD795482086D4E83239F91194B/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Anna Boden,  Ryan Fleck", ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn", "Djimon Hounsou", "Lee Pace", "Lashana Lynch"], 2019, "Marvel Studios Captain Marvel ist ein Abenteuer aus einer bisher nicht gesehenen Ära in der Geschichte des Marvel Cinematic Universe. Es verfolgt die Reise von Carol Danvers (Brie Larson), die den jungen Agenten Nick Fury (Samuel L. Jackson) kennenlernt und schließlich zu einer der mächtigsten Heldinnen des Universums wird.")),

    new MovieModel("Toy Story", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1B6A3B47FBB4CCA1AEC201B730EDBA5491E404C37C32419C055002AFA38ABB9/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("John Lasseter", ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney", "Wallace Shawn", "John Ratzenberger"], 1995, "Willkommen in einer Welt, in der Spielsachen spielen, während ihre Besitzer weg sind. Erlebe gemeinsam mit Woody, Buzz und ihren Freunden ein Abenteuer voller Humor, Herz und Freundschaft.")),

    new MovieModel("Rogue One: A Star Wars Story", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F5D8C3E9CC39E61A6CA9DD0B60945F3CF72280352BA814A525B863A47B937E88/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Gareth Edwards", ["Felicity Jones", "Diego Luna", "Ben Mendelsohn", "Donnie Yen", "Mads Mikkelsen", "Alan Tudyk"], 2016, "Lucasfilm bringt uns mit Rogue One: A Star Wars Story ein episches Abenteuer. In einer Zeit des Konflikts schließt sich eine Gruppe von ungewöhnlichen Helden zusammen, um die Pläne für den Todesstern, die ultimative Waffe des Imperiums, zu stehlen. Dieses Schlüsselereignis in der Star-Wars-Timeline bringt ganz normale Menschen zusammen, die Teil von etwas viel Größerem werden. Einige Sequenzen enthalten Blitzlicht-Effekte, die sich auf lichtempfindliche Zuschauer auswirken können.")),
]));

const hotMovies = new CategoryModel("Beliebte Filme", 4, ko.observableArray([
    new MovieModel("Rogue One: A Star Wars Story", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F5D8C3E9CC39E61A6CA9DD0B60945F3CF72280352BA814A525B863A47B937E88/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Gareth Edwards", ["Felicity Jones", "Diego Luna", "Ben Mendelsohn", "Donnie Yen", "Mads Mikkelsen", "Alan Tudyk"], 2016, "Lucasfilm bringt uns mit Rogue One: A Star Wars Story ein episches Abenteuer. In einer Zeit des Konflikts schließt sich eine Gruppe von ungewöhnlichen Helden zusammen, um die Pläne für den Todesstern, die ultimative Waffe des Imperiums, zu stehlen. Dieses Schlüsselereignis in der Star-Wars-Timeline bringt ganz normale Menschen zusammen, die Teil von etwas viel Größerem werden. Einige Sequenzen enthalten Blitzlicht-Effekte, die sich auf lichtempfindliche Zuschauer auswirken können.")),

    new MovieModel("Star Wars: Die Rückkehr der Jedi-Ritter (Episode VI)", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/369AE3E15F0F8CF4AFDAE32D6B5682DDE6336CA9BD89A4A6125D95AC261167E4/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Richard Marquand", ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams", "Anthony Daniels", "Peter Mayhew"], 2012, "Erlebe den Triumph der Macht in Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter. Im epischen Abschluss der Saga bereitet sich das Imperium darauf vor, die Rebellion mit einem mächtigen Todesstern zu vernichten, während die Rebellenflotte einen massiven Angriff auf die Raumstation durchführt. Luke Skywalker stellt sich Darth Vader in einem abschließenden Duell vor dem bösen Imperator. Enthält Tabakdarstellungen.")),

    new MovieModel("Kingsman: The Secret Service", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE470622B4436C16EEB2FD18E9FD20AF2F79D4FCE65C97455C1508075848F853/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Matthew Vaughn", ["Colin Firth", "Samuel L. Jackson", "Mark Strong", "Taron Egerton", "Sophie Cookson", "Jack Davenport"], 2015, "Eine phänomenale Besetzung mit Colin Firth, Samuel L. Jackson und Michael Caine spielt in diesem actionreichen Spionage-Thriller über einen Straßenjungen, der von einer Gruppe Geheimagenten rekrutiert wird.")),

    new MovieModel("Die Monster AG", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFD99E731B78415F4580EA9EEBDCC820239486C353FB495C10F429D766C48860/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Pete Docter", ["John Goodman", "Billy Crystal", "Mary Gibbs", "Steve Buscemi", "James Coburn", "Jennifer Tilly"], 2001, "Als ein kleines Mädchen namens Boo in ihre Welt wandert, sind es die Monster, die völlig verängstigt sind. Es ist an Sulley und Mike, dem Top-Schrecker-Team, sie unauffällig nach Hause zu bringen.")),

    new MovieModel("Alles steht Kopf", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21C30BE83A276682EF9702D7752B449DB59222D6417C9EA9058990200EDEAAFF/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Pete Docter", ["Amy Poehler", "Phyllis Smith", "Richard Kind", "Bill Hader", "Lewis Black", "Mindy Kaling"], 2015, "Als die 11-jährige Riley in eine neue Stadt zieht, vereinen sich ihre Emotionen, um ihr beim Übergang zu helfen. Freude, Angst, Wut, Ekel und Kummer arbeiten zusammen, aber als Freude und Kummer sich verirren, müssen sie gemeinsam durch ungewohnte Gebiete reisen, um wieder nach Hause zu kommen.")),

    new MovieModel("Toy Story", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1B6A3B47FBB4CCA1AEC201B730EDBA5491E404C37C32419C055002AFA38ABB9/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("John Lasseter", ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney", "Wallace Shawn", "John Ratzenberger"], 1995, "Willkommen in einer Welt, in der Spielsachen spielen, während ihre Besitzer weg sind. Erlebe gemeinsam mit Woody, Buzz und ihren Freunden ein Abenteuer voller Humor, Herz und Freundschaft.")),

    new MovieModel("Avengers: Age of Ultron", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B6D17EE56247DB49AC11AC031EB2FB43189D230EF3592C7C4808F9B0EB363FCD/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joss Whedon", ["Robert Downey Jr.", "Chris Evans", "Marc Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"], 2015, "Gute Absichten richten verheerenden Schaden an, als Tony Stark unwissentlich Ultron, ein K.I.-Monster schafft, das durch Massenvernichtung den Weltfrieden erreichen will.")),

]));

const watchAgain = new CategoryModel("Nochmal Ansehen", 3, ko.observableArray([
    new MovieModel("Die Monster AG", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFD99E731B78415F4580EA9EEBDCC820239486C353FB495C10F429D766C48860/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Pete Docter", ["John Goodman", "Billy Crystal", "Mary Gibbs", "Steve Buscemi", "James Coburn", "Jennifer Tilly"], 2001, "Als ein kleines Mädchen namens Boo in ihre Welt wandert, sind es die Monster, die völlig verängstigt sind. Es ist an Sulley und Mike, dem Top-Schrecker-Team, sie unauffällig nach Hause zu bringen.")),

    new MovieModel("Alles steht Kopf", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/21C30BE83A276682EF9702D7752B449DB59222D6417C9EA9058990200EDEAAFF/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Pete Docter", ["Amy Poehler", "Phyllis Smith", "Richard Kind", "Bill Hader", "Lewis Black", "Mindy Kaling"], 2015, "Als die 11-jährige Riley in eine neue Stadt zieht, vereinen sich ihre Emotionen, um ihr beim Übergang zu helfen. Freude, Angst, Wut, Ekel und Kummer arbeiten zusammen, aber als Freude und Kummer sich verirren, müssen sie gemeinsam durch ungewohnte Gebiete reisen, um wieder nach Hause zu kommen.")),

    new MovieModel("Toy Story", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1B6A3B47FBB4CCA1AEC201B730EDBA5491E404C37C32419C055002AFA38ABB9/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("John Lasseter", ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney", "Wallace Shawn", "John Ratzenberger"], 1995, "Willkommen in einer Welt, in der Spielsachen spielen, während ihre Besitzer weg sind. Erlebe gemeinsam mit Woody, Buzz und ihren Freunden ein Abenteuer voller Humor, Herz und Freundschaft.")),

    new MovieModel("Avengers: Age of Ultron", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B6D17EE56247DB49AC11AC031EB2FB43189D230EF3592C7C4808F9B0EB363FCD/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joss Whedon", ["Robert Downey Jr.", "Chris Evans", "Marc Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"], 2015, "Gute Absichten richten verheerenden Schaden an, als Tony Stark unwissentlich Ultron, ein K.I.-Monster schafft, das durch Massenvernichtung den Weltfrieden erreichen will.")),

    new MovieModel("The Avengers", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F48C2D492B31714C94AB0DD0BCF3D3CA7EAFB658F922BF313011C9D308B9B494/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joss Whedon", ["Robert Downey Jr.", "Chris Evans", "Marc Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"], 2012, "Als ein unerwarteter Feind die globale Sicherheit bedroht, braucht Nick Fury, Leiter der internationalen Friedenssicherungsbehörde S.H.I.E.L.D., ein Team, das die Welt vor einer Katastrophe bewahrt.")),

    new MovieModel("The Return of the First Avenger", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C9F6B7F677278D7E54A17A9469B46F1C6C0C8A96471910F355A262942B32D384/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Joe Russo, Anthony Russo", ["Chris Evans", "Sebastian Stan", "Anthony Mackie", "Scarlett Johansson", "Cobie Smulders", "Frank Grillo"], 2014, "Im heutigen Washington D.C. arbeitet Steve Rogers, alias Captain America, mit Black Widow und dem neuen Verbündeten Falcon zusammen, um einen mächtigen und geheimnisvollen Feind zu bekämpfen.")),

    new MovieModel("Thor", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/973899DBFBE0A2D5588681989AD0C57E85010167E3F4023CE44CBB4615AFB677/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Kenneth Branagh", ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston", "Anthony Hopkins", "Stellan Skarsgård", "Kat Dennings"], 2011, "Thor soll den Thron von Asgard besteigen, bis er durch seine Arroganz einen uralten Krieg neu entfacht. Thor wird zur Erde verbannt und muss von dort aus seinen bösen Bruder Loki  davon abhalten, Odin zu stürzen und Asgard seinen bösen Machenschaften zu unterwerfen.")),

    new MovieModel("Guardians of the Galaxy", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72D45D883C538D76E4D510760E3883A4457ED4B0A81CC9D39347E5F5D59A0E6E/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("James Gunn", ["Chris Pratt", "Zoë Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Lee Pace"], 2014, "Der Abenteurer Peter Quill wird gejagt, seit er einem mächtigen, das Universum bedrohenden Schurken eine mysteriöse Kugel gestohlen hat. Um nicht gefangen zu werden, tut sich Quill mit Außenseiterhelden zusammen: mit Rocket, einem Waschbären; Groot, einem menschenähnlichen Baumwesen; der tödlich-rätselhaften Gamora; und Drax, dem Zerstörer.")),

    new MovieModel("Captain Marvel", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/980264E5D398E019B2DBD30C1100DAD0C1393EDD795482086D4E83239F91194B/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Anna Boden,  Ryan Fleck", ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn", "Djimon Hounsou", "Lee Pace", "Lashana Lynch"], 2019, "Marvel Studios Captain Marvel ist ein Abenteuer aus einer bisher nicht gesehenen Ära in der Geschichte des Marvel Cinematic Universe. Es verfolgt die Reise von Carol Danvers (Brie Larson), die den jungen Agenten Nick Fury (Samuel L. Jackson) kennenlernt und schließlich zu einer der mächtigsten Heldinnen des Universums wird.")),

    new MovieModel("Rogue One: A Star Wars Story", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F5D8C3E9CC39E61A6CA9DD0B60945F3CF72280352BA814A525B863A47B937E88/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Gareth Edwards", ["Felicity Jones", "Diego Luna", "Ben Mendelsohn", "Donnie Yen", "Mads Mikkelsen", "Alan Tudyk"], 2016, "Lucasfilm bringt uns mit Rogue One: A Star Wars Story ein episches Abenteuer. In einer Zeit des Konflikts schließt sich eine Gruppe von ungewöhnlichen Helden zusammen, um die Pläne für den Todesstern, die ultimative Waffe des Imperiums, zu stehlen. Dieses Schlüsselereignis in der Star-Wars-Timeline bringt ganz normale Menschen zusammen, die Teil von etwas viel Größerem werden. Einige Sequenzen enthalten Blitzlicht-Effekte, die sich auf lichtempfindliche Zuschauer auswirken können.")),

    new MovieModel("Star Wars: Die Rückkehr der Jedi-Ritter (Episode VI)", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/369AE3E15F0F8CF4AFDAE32D6B5682DDE6336CA9BD89A4A6125D95AC261167E4/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Richard Marquand", ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams", "Anthony Daniels", "Peter Mayhew"], 2012, "Erlebe den Triumph der Macht in Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter. Im epischen Abschluss der Saga bereitet sich das Imperium darauf vor, die Rebellion mit einem mächtigen Todesstern zu vernichten, während die Rebellenflotte einen massiven Angriff auf die Raumstation durchführt. Luke Skywalker stellt sich Darth Vader in einem abschließenden Duell vor dem bösen Imperator. Enthält Tabakdarstellungen.")),

    new MovieModel("Kingsman: The Secret Service", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE470622B4436C16EEB2FD18E9FD20AF2F79D4FCE65C97455C1508075848F853/scale?width=1200&aspectRatio=1.78&format=jpeg",
        new MovieDetailsModel("Matthew Vaughn", ["Colin Firth", "Samuel L. Jackson", "Mark Strong", "Taron Egerton", "Sophie Cookson", "Jack Davenport"], 2015, "Eine phänomenale Besetzung mit Colin Firth, Samuel L. Jackson und Michael Caine spielt in diesem actionreichen Spionage-Thriller über einen Straßenjungen, der von einer Gruppe Geheimagenten rekrutiert wird.")),
]));

const emptyModel = new MovieModel("", "", new MovieDetailsModel("", "", 0, ""));

function MovieModel(name, image, movieDetails) {
    var self = this;
    self.name = name;
    self.image = image;
    self.movieDetails = movieDetails;
    self.detailsShown = ko.observable(false)
    self.showDetails = function () {
        self.detailsShown() ? self.detailsShown(false) : self.detailsShown(true);
    }
}

function MovieDetailsModel(director, performer, releaseYear, description) {
    var self = this;
    self.director = director;
    self.performer = performer;
    self.releaseYear = releaseYear;
    self.description = description;
    self.concatenatedPerformer = ko.computed(function () {
        var string = "";
        for (const element of self.performer) {
            string += element + ", ";
        }
        return string.substr(0, string.length - 2);
    });
}

function CategoryModel(category, index, movies) {
    var self = this;
    self.category = category
    self.index = index;
    self.movies = movies;
}

function StreamingViewModel() {
    var self = this;
    self.chosenFilm = ko.observable();
    newMovies.movies.push(emptyModel);
    hotMovies.movies.push(emptyModel);
    watchAgain.movies.push(emptyModel);
    self.categories = ko.observableArray([newMovies, hotMovies, watchAgain])

    self.goToMovie = function (movie) {
        self.chosenFilm(movie);
    }

    self.goToMainMenu = function () {
        self.chosenFilm(null);
    }
};

ko.applyBindings(new StreamingViewModel());
