<template>
    <div>
        <input type="text" @input="$emit('input',$event.target.value)">
    </div>
</template>
<script>
export default {
    model:{
        prop:'value',
        event:'input', 
    }  
}
</script>