console.log("Type in: 'movieSeen()' and press ENTER");
var movieDB = {
    movies: [
        {
            title: "Fantastic 4",
            rating: 3.5,
            hasWatched: true
        },
        {
            title: "Robinhood",
            rating: 4.5,
            hasWatched: false
        },
        {
            title: "The Giver",
            rating: 5,
            hasWatched: true
        },
        {
            title: "TMNT",
            rating: 1.5,
            hasWatched: false
        }
    ]
    
};

function movieSeen() {
    for(var i=0; i<movieDB.movies.length; i++){
        if(movieDB.movies[i].hasWatched == true) {
            console.log("You have watched " +movieDB.movies[i].title + " - " + movieDB.movies[i].rating + " stars");
        } else {
            console.log("You have not watched " +movieDB.movies[i].title + " - " + movieDB.movies[i].rating + " stars");
        }
    }
}

