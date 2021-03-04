<template>
    <div class="custom-card">
     <img  :src="image" :alt="title">
     <!-- <h3>{{movie}}</h3> -->
     
     <button class="details">More Details</button>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,  axios)
export default {
    

    props:{name: String},
       
       data() {
          return{
            apiImage:"",
            image:"",
            title:this.name
            // image: this.apiImage.movies[0]
        }
        
    },
    created(){
        let query = 'https://yts.mx/api/v2/list_movies.json?query_term='+this.name
        console.warn(query)
            Vue.axios.get(query)
            .then((res) => {
                this.apiImage = res.data.data
                console.warn(res)
                this.image = res.data.data.movies[0].medium_cover_image

            });
        }
}
</script>
<style scoped>
 .custom-card{
     width: 300px;
     display: inline-block;
      padding: 40px 40px 60px 40px;
     width: 300px;
     height: 450px;
     
   
}

 .custom-card:hover {
  box-shadow: 0 5px 10px 0 red;
  transition: 0.6s;
  /* padding-bottom: 60px; */
  width: 300px;
  height: 450px;
}
img{
    border: 5px solid white;
}

 h3{
     color: white;
     font-family: calibri;
     font-size: 20px;
 }
 .details{
     background-color:rgb(13, 132, 172);
     border: 1px solid black ;
     padding: 5px;
     text-align: center;
     border-radius: 5px;
     color: white;
     font-size: 10px;
 }
</style>