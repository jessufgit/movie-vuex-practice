<template>
    <div>
        <b-card
            no-body
            v-for="movie in movies"
            :key="movie.id"
            :review="movie.reviewText"
            :title="movie.title"
            class="movieCard"
        >
            <b-row no-gutters class="moviesByRow">
            <b-col md="6">
                <b-card-img img-lazy :src="movie.img" :alt="movie.title" class="rounded-0"></b-card-img>
            </b-col>
            <b-col class="cardBodyCol">
                <b-card-body >
                    <b-row class="topRow">
                        <span style="font-weight: bolder; font-size: 1.4em;">{{movie.title}}</span>
                        <span>Rated: {{ movie.rating }}</span>
                        <b-link
                            id="purchaseButton"
                            v-if="movie.available_tickets > 0"
                            :to="{name: 'purchasing', params: {movie: movie}}"
                            router-tag="button"
                            class="btn btn-info"
                        >Available Now
                        </b-link>
                        <b-link
                            v-else
                            disabled
                            cursor: pointer
                            class="btn btn-warning"
                        >
                        Sold Out
                        </b-link>
                    </b-row>
                    <b-row>
                        <b-card-text class="cardText">
                            <div class="award"
                                v-if="movie.awardWinner">
                                <span v-for="award in movie.awardWinner" :key="award.id">&#127775; {{ award }}  </span>
                                <br>
                            </div>
                            <div class="review">
                                <span v-if="movie.reviewText !== ''">"{{ movie.starRating }} stars -- {{ movie.reviewText }}" -- {{ movie.reviewer }}</span>
                                <b-link
                                    :to="{name: 'review', params: {movie: movie}}"
                                    router-tag="button"
                                    class="btn btn-info"
                                >Review This Movie
                                </b-link>
                            </div>
                        </b-card-text>
                    </b-row>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script src="chai.js" type="text/javascript"></script>
<script>
export default {
    name: 'MovieListItem',
    computed: {
        movies () {
            return this.$store.getters.getMovies
        },
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap');

.moviesByRow {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    border-bottom: 2px solid white;
}
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 5px;
    padding: 20px 0px;
}
.soldOut {
    cursor: pointer;
}
.movieCard {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    background-color: black;
    color: white;
}
.movieCard img {
    overflow: hidden;
    margin: 0 auto;
}
.cardBodyCol {
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.topRow {
    border-top: 1px white solid;
    border-bottom: 1px white solid;
}
.cardText {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
}
.award, .review {
    padding: 15px 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.review>span {
    padding: 15px 0px;
    display: flex;
    width: 100%;
    flex-flow: row wrap;
}
.review>.btn-info {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .movieCard {
        display: block;
        flex: 0 0 90%;
        border: 2px white solid;
        padding-top: 15px;
    }
    .movieCard img {
        max-width: 200px;
        max-height: 100px;
        margin: 0 auto;
    }
    .cardText {
        flex-flow: column wrap;
    }
    span {
        margin: 0 auto;
    }
}
</style>
