<template>
  <div
    id="reviewPage"
    >
    <b-form
    @submit.prevent="addAReview"
      id="reviewForm">
      <b-form-group
        label-cols-lg="2"
        label-for="movieTitle"
        label="Title:">
        <b-form-input
          id="movieTitle"
          v-model.lazy="review.title"
          v-if="passedMovie === true"
          :placeholder="review.title">
        </b-form-input>
        <b-form-input
          v-else
          v-model="review.title"
          placeholder=""
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        label-cols-lg="2"
        label-for="reviewerName"
        label="Your Name: "
      >
        <b-form-input
          id="reviewerName"
          v-model="review.reviewer"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        label-cols-lg="2"
        label-for="reviewInput"
        label="Your Review: "
      >
        <b-form-textarea
          v-model="review.reviewText"
          id="reviewInput"
          rows="3"
          max-rows="6"
        >
        </b-form-textarea>
      </b-form-group>
      <b-form-group
        label-cols-lg="2"
        id="ratingBlock">
        <star-rating
          :star-size="30"
          :glow=2
          id="ratingStars"
          active-color='#008080'
          @rating-selected="getRating"
        ></star-rating>
      </b-form-group>
            <router-link :to="{ name: 'home' }" ><b-button variant="info" type="submit" >Submit Review</b-button></router-link>
    </b-form>
    <div
      id="finalReview"
      v-if="postReview">
      <div>{{review.title}}</div>
      <div>{{review.rating}} stars</div>
      <div>{{review.reviewText}}</div>
      <div>{{review.id}}</div>
    </div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  created() {
    this.review = this.$route.params.movie || {}
  },
  data() {
    return {
      passedMovie: false,
      postReview: false,
      review: {
        id: '',
        reviewText: '',
        reviewer: '',
        starRating: 0
      },
    }
  },
  methods: {
    getRating: function(starRating) {
      this.review.starRating = starRating
    },
    addAReview: function() {
      this.postReview = true
      const payload = {
        'id': this.$route.params.movie.id,
        'title': this.review.title,
        'starRating': this.review.starRating, 'reviewer': this.review.reviewer,
        'reviewText': this.review.reviewText
      }
      this.$store.commit('addMovieReview', payload)
    }
  }
}
</script>

<style lang="scss">
#reviewPage {
  color: white;
}
#reviewForm {
  width: 80%;
  margin: 0 auto;
}

#ratingStars {
  padding: 5px;
}

</style>
