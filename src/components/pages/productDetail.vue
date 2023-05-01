<template>


    <div className="card mx-auto w-75 bg-light" v-if="this.flag==true">
  <div className="row no-gutters">
    
    <div >
      <div className="card-body">
<h5 className="card-title text-dark" >{{this.Title}}</h5>

        <p className="card-text text-dark">{{this.Desc}}</p>
        <p className="card-text text-dark"><small className="text-muted">{{this.Price}}</small></p>
      </div>
    </div>
  </div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "ProductDetail",
        data(){
            return{
                 
                 ID:'',
                 Title:'',
                 Desc:'',
                 Price:0,
                 flag:false
             
             }
        },
        created(){
            this.getProductById();
        },
        methods:{
            getProductById() {
      this.id = this.$route.params.id;
      // console.log(this.id)
      axios.get(`http://localhost:3004/products/${this.id}`)
        .then((res) => {
         this.ID=res.data.id;
         this.Title=res.data.title;
         this.Desc=res.data.description;
         this.Price=res.data.price;
         this.flag=true;
         console.log(res.data.title)       
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back(){
        this.$router.push('/')
    },
        }

    }
</script>

<style scoped>

</style>