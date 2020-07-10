<template>
    <b-container class="container">
        <h1>Playing Now</h1>
        <MovieListItem />
    </b-container>
</template>
<script>
import MovieListItem from '../components/MovieListItem.vue'

export default {
    name: 'MovieList',
    components: {
        MovieListItem,
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap');

h1 {
    font-family: 'Raleway', sans-serif;
    padding: 20px;
    color: white;
}
</style>
