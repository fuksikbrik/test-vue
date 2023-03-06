<template>
   <div class="wrapper-shop">
        <header-block/>
        <div class="block-card-and-cart">
            <block-items class="block-items"></block-items>
            <block-cart class="block-cart"></block-cart>
        </div> 
   </div>
</template>

<script>


export default {
   
}
</script>

<style>
.wrapper-shop{
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
}
.block-card-and-cart{
    display: flex;
    justify-content: center;
    gap: 20px;
}
.block-cart{
    width: 35%;
}
.block-items{
    width: 65%;
    display: flex;
    flex-wrap: wrap;
}

</style>
