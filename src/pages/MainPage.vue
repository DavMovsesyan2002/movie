<template>
    <div class='main-page'>
        <h1>Online cinema</h1>
        <button type="button" class='btn btn-outline-light' @click="$router.push({name: 'films'})">Go to movies</button>
    </div>
</template>
<script>
export default {
    name:'MainPage',
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
    .main-page{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        min-height:100vh;
        h1{
            color:#ffffff;
            font-size:70px;
            margin-bottom: 20px;
        }
    }
</style>