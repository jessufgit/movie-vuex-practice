<template>
  <div>
      <h1>You are confirmed for <div>{{this.$route.params.newOrder.selectedTicketNum}}</div> to see <div>{{this.$route.params.newOrder.title}}</div> at <div>{{this.$route.params.newOrder.selectedMovieTime}}!</div> </h1>
      <div><iframe src="https://giphy.com/embed/hVTouq08miyVo1a21m" width="100%" height="100%" frameBorder="0" class="giphy-embed" ></iframe></div><p><a href="https://giphy.com/gifs/snl-saturday-night-live-season-45-hVTouq08miyVo1a21m">via GIPHY</a></p>
  </div>
</template>

<script>
export default {
    name: 'credits',
    props: ['newOrder']
}
</script>

<style>
div {
  display: inline;
  color: #17A2B8;
}

</style>
