<template>
   <div class="card-item">
    <img class="image-product" :src=" require('../assets/image/' + product_data.image)" alt="">
    <h1 class="name-card-product">{{product_data.name}}</h1>
    <p class="weight-product">Количество {{product_data.weight}} шт.</p>   
    <p class="price-product">{{product_data.price}} грн</p>
    <button-add @click="addProductCart" />

   </div>
</template>

<script>
export default {
    props:{
        product_data:{
            type:Object,

        }
    },
    data() {

    },
    methods: {
        addProductCart() {
            this.$emit('sendID', this.product_data.id)
        }
    }
}
</script>

<style>
   .card-item{
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
}
.image-product{
    width: 60%;
    margin: 10px;
}
</style>