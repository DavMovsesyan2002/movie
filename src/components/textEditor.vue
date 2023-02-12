<template>
    <div>
       <input type="text" v-model="text"> 
       <!-- <div :inner-html.prop="text | upperCase | emoji"> -->
        <div :inner-html.prop="text | marked">

       </div>
    </div>
</template>
<script>
export default {
    name:'TextEditor',
    data() {
        return {
            text:'',
        }
    },
    filters:{
        upperCase(value){
            return value.toUpperCase();
        },
        emoji(value){
            return value.replace(':)','😀')
        }
    },
}
</script>