import { createApp } from 'vue'
import App from './App.vue'
import WrapperShop from './components/WrapperShop.vue'
import HeaderBlock from './block/HeaderBlock.vue'
import BlockItems from './block/BlockItems.vue'
import BlockCart from './block/BlockCart.vue'
import ButtonAddProduct from './ui/ButtonAddProduct.vue'
import ItemCard from './components/ItemCard.vue'

const app = createApp(App);
app.component('wrapper-shop', WrapperShop)
app.component('header-block', HeaderBlock)
app.component('block-items', BlockItems)
app.component('block-cart', BlockCart)
app.component('item-card', ItemCard)
app.component('button-add', ButtonAddProduct)
app.mount('#app')
