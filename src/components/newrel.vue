<template>
    <div>
        <h2>Top Releases  </h2><br>
  
  <card v-for = "movie in topMovies" v-bind:key = "movie" v-bind:name = movie />
  <!-- <card :name= movies[1].name />
  <card :name= movies[2].name />
 
  <card name="Joker"/>
  <card name="Charlie's Angles"/>
  <card name ="Dolittle"/>
  <card name ="Dolittle"/>
  <card name="Wonder Woman" />
  <card name="birdsofprey"/>
  <card name="Joker"/>
  <card name="Charlie's Angles"/> -->


<!-- <img src="../assets/logo.png">
  <b-card-group columns>
    <b-card title="Bloodshot" img-src="assets/logo.png" img-alt="Image" img-top>
      <b-card-text>
    
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group> -->

      </div>

</template>

<style scoped>
h2{
    color: white;
    margin-top: 100px;
    text-align: center;
    margin-left: 90px;
}
</style>

<script>


import card from './card.vue'
import json from '../../movie_dataset.json'
     

export default {
  name: 'newrel',
  data(){
    return{
      movies : [{name: "Bloodshot"},{name: "birdsofprey"},{name: "Joker"},{name: "Dolittle"}],
      myJson: json,
      topMovies: []
  }
  },
  components: {
    card
  },
  created(){
    let count = 0
    // let movie = ""
    for( let movie of this.myJson){
      if (count >3){
          break
      }
        if (movie["vote_average"]>8){
          this.topMovies.push(movie["title"])
          count++
        }
        
    }
    // console.warn(this.topMovies)
  }
}
</script>
