<template>
  <div>
    <table class="table table-striped table-light">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <router-link
              :to="`/products/${product.id}`"
              class="btn btn-outline-success"
              >Detail</router-link
            >
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning"
              @click="updateProduct(product.id)"
            >
              Update
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="handleDelete(product.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllProducts",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      const data = await fetch("http://localhost:3004/products").then((res) =>
        res.json()
      );
      console.log(data);
      this.products = data
    },
    handleDelete(id) {
      axios
        .delete(` http://localhost:3004/products/${id}`)
        .then((res) => {
          console.log(res.data);
          this.getAllProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProduct(id) {
      axios
        .patch(`http://localhost:3004/products/${id}`, {
          id: 909,
          title: "Updated",
          description: "Product updated",
          price: 222,
        })
        .then((res) => {
          console.log(res.data);
          this.getAllProducts();

          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>