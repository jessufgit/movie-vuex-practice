class Movie {
    constructor(details) {
        const { title, rating, available_tickets } = details
        this.title = title
        this.rating = rating
        this.available_tickets = available_tickets
    }

    get movietitle() {
        return `${this.title}`
    }

    get movierating() {
        return `${this.rating}`
    }

    get available_movie_tickets() {
        return `${this.available_tickets}`
    }
}

const titleTest = function() {
    const sampleMovie = {
        title: 'WallE',
        rating: 'G',
        available_tickets: 100,
    }
    const testMovie = new Movie(sampleMovie)

//console.log statement returns true or false
    // if (testMovie.movietitle === 'WallE' && testMovie.movierating === 'G') {
    //     console.log(testMovie.movietitle, "is rated", testMovie.movierating);
        if (testMovie.available_movie_tickets === 100) {
            console.log("There are", testMovie.available_movie_tickets, "available tickets to see this movie.");
        }
    // }
    else {
        console.log("Error");
    }
}

titleTest()
