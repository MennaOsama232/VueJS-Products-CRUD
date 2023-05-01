<template>
    <div>
        <form class="w-50 mx-auto" action="" @submit.prevent="addProduct">
  <div class="form-group mb-3">
    <!-- <label for="ID">ID</label> -->
    <input type="number" class="form-control"  placeholder="Enter ID" v-model="ID">

  </div>
  <div class="form-group mb-3">
    <!-- <label for="Title">Title</label> -->
    <input type="text" class="form-control"  placeholder="Enter Title" v-model="Title">

  </div>
  <div class="form-group mb-3">
    <!-- <label for="Desc">Description</label> -->
    <input type="text" class="form-control"  placeholder="Enter Description" v-model="Desc">
  </div>

  <div class="form-group mb-3">
    <!-- <label for="Price">Price</label> -->
    <input type="number" class="form-control" placeholder="Enter Price" v-model="Price">

  </div>
  <button  class="btn btn-dark">Add Product</button>
</form>
    </div>
</template>

<script>
        import axios from "axios";

    export default {
        name: "AddProduct",
        Data(){
            return{
                 
                ID:'',
                Title:'',
                Desc:'',
                Price:0
            
            }
           
        },
        methods: {
            addProduct(){
        axios.post("http://localhost:3004/products",{
            id:this.ID,
            title:this.Title,
            description:this.Desc,
            price:this.Price
        }).then((res)=>{
            console.log(res.data)
            this.$router.push('/')
        }).catch((err)=>{
            console.log(err)
        })
       
    }
        }
    }
</script>

<style scoped>

</style>