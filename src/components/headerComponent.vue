<template>
<div class="imgheader">
    <h1>
        Search For Any Movie
    </h1>
    <!-- <input type="text" name="text" placeholder="search icon" class="searchbar"/> -->
     
     <b-input-group   size="sm" class="mb-2 searchbar">
      <b-input-group-prepend is-text class="test">
        <b-icon icon="search" ></b-icon>
      </b-input-group-prepend>
      <b-form-input class="searchtext" type="search" placeholder="Search terms"></b-form-input>
    </b-input-group>

    <b-button class="searchbutton" variant="danger">Search</b-button>
    <hr style="width:50%;text-align:left;margin-left:0">
   </div>
   
</template>

<style scoped>

h1{
    color:white;
    font-family: Calibri;
    margin-top: 50px;

}
.searchbar{
    width:50%;
    border: 1px solid black !important;
    border-radius: 25px !important;
    
    margin-left: auto;
    margin-right: auto;
   
}
.test{
    border-radius: 15px !important;
}
 .searchtext::placeholder{
     color: rgb(238, 107, 107);
     font-weight: 800;
     text-align: left;
 }

 
 .searchbutton{
    display: block;
     width: 100px;
    /* background-image: linear-gradient(to top left,#ff8a00 30%,#e52e71); */
    padding: 10px;
    text-align: center;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    /* border-radius: 100%; */

} 
.imgheader{
    /* background-image: url('../assets/mb.jpg'); */
    /* height: 50vh; */
    padding-top: 30px;

}


</style>



