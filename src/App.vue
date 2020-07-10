<template>
  <div id="app">
    <nav>
      <router-link class="link" :to="{ name: 'home' }" style="font-weight: bolder;">5th Avenue Theatre</router-link>
      <router-link class="link" :to="{ name: 'addMovie' }">Add a Movie to our Marquee</router-link>
    </nav>
    <b-container>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"/>
      </transition>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
}
</style>

<style scoped>
nav {
  display: flex;
  position: fixed;
  z-index: 2;
  justify-items: left;
  margin: 0px;
  padding: 15px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: white 2px solid;
  background-color: #000;
}
.container {
  padding-top: 50px;
}
.link {
  color: white;
  margin: 10px 20px;
}
.link:hover {
  color: #17A2B8;
  text-decoration: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
