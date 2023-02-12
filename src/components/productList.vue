<template>
    <div>
        <div class="col">
            <!-- <my-input v-model="searchText"/>
            {{searchText}}
            <button class="btn btn-success">Найти</button> -->
            <h1>Найти кое что</h1>
            <Search @search="searchProducts"/>
        </div>
        <div class="container d-flex justify-content-center">
            <ProductCard v-for="(product,index) in products" @addToBasket="addToBasket(index)" :key="index" :title="product.title" :imgUrl="product.imgUrl" :price="product.price" :count="product.count"/>
        </div>  
    </div>
</template>
<script>
import ProductCard from './productCard'
// import MyInput from './myInput'
import Search from './Search'
export default {
    name:'productList',
    components:{
        ProductCard,
        // MyInput,
        Search,
    },
    data() {
        return {
            searchText:'',
            products:[
                {
                    title: 'Dell Xtreme 270 Laptops',
                    price: 3999,
                    imgUrl:'https://i.imgur.com/lLs9Gao.jpg',
                    count: 30,
                },
                {
                    title: 'Lenovo',
                    price: 5000,
                    imgUrl:'https://www.lenovo.com/medias/ww-lenovo-laptop-v15-amd-hero.png?context=bWFzdGVyfHJvb3R8NDM4OTQyfGltYWdlL3BuZ3xoZTYvaDg2LzEwNzc4MDE1NzYwNDE0LnBuZ3xjZDdhZjRjMjAzMjgwMDVlY2I4NjM0YWZlM2UzNGM1MWM4NTAwMzg0YzA1MTFhNDQwMWMzYzdiMzQ5ZWYwYmFi',
                    count: 5,
                }
            ],
        }
    },
    methods: {
        addToBasket(index){
            console.log(index);
        },
        searchProducts(searchText){
            console.log(searchText);
        }
    },
}
</script>