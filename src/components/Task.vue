<template>
    <div>
        <p>
            Выберите кол-во продуктов։
        </p>
        <button class="btn btn-success" @click="decreaseCount">-</button>
        <input type="number" :value="count" :min="minCount" :max="maxCount">
        <button class="btn btn-success" @click="increaseCount">+</button>
    </div>
</template>
<script>
export default {
    name:'Task',
    data(){
        return{
            count:1,
            minCount:1,
            maxCount:10,
        }
    },  
    methods: {
        increaseCount(){
            // увеличивает
            if(this.count < this.maxCount){
                this.count++;
            }
        },
        decreaseCount(){
            // уменьшает
            if(this.count > this.minCount){
                this.count--;
            }
        },
    },
}
</script>