<template>
    <div class="recomendtext">
        <h1>RECOMMENDED MOVIES FOR YOU</h1>
        <h5 >(click any of the movies to get recommendation)</h5>
  <card name="Wonder Woman" />
  <card name="birds of prey"/>
  <card name="Joker"/>
  <!-- <card name="Charlie's Angles"/> -->
  <card name ="Dolittle"/>
  

  </div>

</template>

<script>

import card from './card.vue'

export default {
  name: 'recomend',
  components: {
  card
  }
}
</script>

<style scoped>
.recomendtext{
    margin-top: 60px;
    color:white;
    font-family: Cambria;
}
</style>