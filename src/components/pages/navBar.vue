<template>
 <nav className="navbar navbar-expand-lg navbar-light bg-dark  mb-3 ">
 
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
     
     <li className="nav-item">
      <router-link class="nav-link text-light" to="/products">All Products</router-link>
     </li>
     <li className="nav-item">
      <router-link class="nav-link text-light" to="/add">Add Product</router-link>
     </li>
  
   </ul>
   
 </div>
</nav>
 </template>
 
 <script>
     export default {
         name:'navBar'
     }
 </script>
 
 <style scoped>
 
 </style>