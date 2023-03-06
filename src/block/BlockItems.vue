<template>
<div class="wrapper-block-items">
    <item-card
    v-for="product in products"
    :key="product.id"
    :product_data="product"
    @sendID="showChildConsole"
     ></item-card>
   
</div>
    
</template>

<script>

export default {
  data() {
    return {
       products:[
            {
            image:'california-hit.jpg',
            name:'Калифорния Хит',
            price:'100',
            weight:'6',
            id:'1'
            },
            {
            image:'california-tempura.jpg',
            name:'Калифорния Темпура',
            price:'200',
            weight:'6',
            id:'2'
            },
            {
            image:'philadelphia.jpg',
            name:'Филадельфия',
            price:'300',
            weight:'6',
            id:'3'
            },
            {
            image:'zapech-california.jpg',
            name:'Запеченная калифорния ',
            price:'400',
            weight:'6',
            id:'4'
            }
           

        ]
    }
  },
  methods:{
    showChildConsole(data){
        console.log(data)
    }
  }
}



</script>


<style>
.wrapper-block-items{
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    display: flex;
    
    flex-wrap: wrap;
    gap: 20px;
    padding: 2%;
}

</style>
