import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {"id": 1, "title": "1917", "available_tickets": 100, "rating" : 'R', "img": "https://specials-images.forbesimg.com/imageserve/5ddc5d83ef7cd600067ba728/960x0.jpg?fit=scale", "reviewText": "Best war movie since Saving Private Ryan", "reviewer": "Jay", "starRating": 5 },
      {"id": 2, "title": "Finding Nemo", "available_tickets": 100, "rating" : 'G', "img": "https://lumiere-a.akamaihd.net/v1/images/open-uri20160812-3094-hyg449_11f43a47.jpeg?region=0%2C0%2C2048%2C640", "reviewText": "", "reviewer": "", "starRating": 0  },
      {"id": 3, "title": "Parasite", "available_tickets": 100, "rating" : 'R', "img": "https://images1.houstonpress.com/imager/u/745xauto/11379247/hou_art_20191025_parasite_header.jpg", "awardWinner": ["Oscar"], "reviewText": "", "reviewer": "", "starRating": 0  },
      {"id": 4, "title": "Jumanji", "available_tickets": 100, "rating" : 'PG', "img": "https://gonewiththetwins.com/new/wp-content/uploads/2017/12/jumanjiwelcometothejungle_blue-1.jpg", "reviewText": "", "reviewer": "","starRating": 0    }
    ]
  },
  getters: {
    getMovies (state) {
      return state.movies
    },
  },
  mutations: {
    setMovies (state, movies) {
      state.movies = movies
    },
    addMovie (state, movie) {
      state.movies.push(movie)
    },
    purchaseTix (state, {id, movieOrder}) {
      const index = state.movies.findIndex(movie => movie.id === id)
      state.movies[index].available_tickets -= movieOrder.selectedTicketNum
    },
    addMovieReview (state, {id, movie}) {
      const index = state.movies.findIndex(movie => movie.id === id)
      state.movies[index].title = movie.title
      state.movies[index].reviewText = movie.reviewText
      state.movies[index].reviewer = movie.reviewer
      state.movies[index].starRating = movie.starRating
    }
  },
  actions: {
    addAMovie (context, newMovie) {
      context.commit('addMovie', newMovie)
    },

  },
  modules: {
  }
})
