<template>
    <div>
        <div class="cotnainer">
            <div class="row">
                <h2>Я найду тебя!</h2>
                <input type="text" @input="searchText = $event.target.value">
                <p>Всего имен։ {{names.length}}, совпадений {{getFilteredNames.length}}</p>
                <ul>
                    <li v-for="(name,index) in getFilteredNames" :key="index">{{name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SearchText',
    data() {
        return {
            searchText: '',
            names: ['Дейзи Ридли','Мэдисон Айсмен','Ник Джонас','Путин'],
        }
    },
    computed: {
        getFilteredNames(){
            return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
}
</script>