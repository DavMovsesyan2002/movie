<template>
    <div>
        <input type="text" class="form-control" v-model="searchText">
        <button class="btn btn-success" @click="$emit('search', searchText)">Найти</button>
    </div>
</template>
<script>
export default {
    name:'Search',
    data() {
        return {
            searchText: ''
        }
    },    
}
</script>
<style scopped>
    
</style>