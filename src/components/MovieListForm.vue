<template>
    <b-card
        title="Add A Movie To Our Marquee"
        class="movieform"
    >
    <b-card-text>
        <b-form>
            <b-form-group
                label="Title"
                label-align-sm="left"
                label-cols-sm="2"
            >
                <b-form-input
                    type="text"
                    v-model="form.title"
                />
            </b-form-group>
            <b-form-group
                label="Rating"
                label-align-sm="left"
                label-cols-sm="2"
            >
                <b-form-input
                    type="text"
                    v-model="form.rating"
                />
            </b-form-group>
            <b-form-group
                label="Image URL"
                label-align-sm="left"
                label-cols-sm="2"
            >
                <b-form-input
                    type="url"
                    v-model="form.img"
                />
            </b-form-group>
            <b-form-group
                label="Available Seats"
                label-align-sm="left"
                label-cols-sm="2"
            >
                <b-form-input
                    placeholder="Available Seats" type="number"
                    v-model="form.available_tickets"
                />
            </b-form-group>
            <b-form-checkbox-group
                label="Award Winner"
                label-align-sm="left"
                label-cols-sm="2"
                v-model="form.awardWinner"
            >
                <b-form-checkbox
                    value="Oscar"
                >Oscar</b-form-checkbox>
                <b-form-checkbox
                    value="Golden Globe"
                >Golden Globe</b-form-checkbox>
                <b-form-checkbox
                    value="Critic's Choice"
                >Critic's Choice</b-form-checkbox>
            </b-form-checkbox-group>
                <br>
                <b-link
                    class="btn btn-info"
                    type="button"
                    :to="{name: 'home'}"
                    @click="addMovietoList">
                Add Your Movie
                </b-link>
        </b-form>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: 'MovieListForm',
    data () {
        return {
            form: {
                title: '',
                available_tickets: 0,
                rating: '',
                img: '',
                awardWinner: [],
                reviewText: "",
                reviewer: "",
                starRating: 0
            },
        }
    },
    methods: {
        addMovietoList(evt) {
            evt.preventDefault()
            const newmovie = this.form
            this.$store.dispatch('addAMovie', newmovie)
            this.form = {}
        },
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap');

.movieform
{
    font-size: 1.2em;
    background-color: #000;
    width: 80%;
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
    color:#fff;
}
</style>
